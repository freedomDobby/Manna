package com.ssafy.manna.global.auth.jwt.filter;

import com.ssafy.manna.global.auth.domain.RefreshToken;
import com.ssafy.manna.global.auth.jwt.JwtService;
import com.ssafy.manna.global.auth.repository.RefreshTokenRepository;
import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.repository.MemberRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.mapping.GrantedAuthoritiesMapper;
import org.springframework.security.core.authority.mapping.NullAuthoritiesMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@RequiredArgsConstructor
@Slf4j
public class JwtAuthenticationProcessingFilter extends OncePerRequestFilter {

    private static final String NO_CHECK_URL = "/login";

    private final JwtService jwtService;
    private final MemberRepository memberRepository;
    private final RefreshTokenRepository refreshTokenRepository;

    private GrantedAuthoritiesMapper authoritiesMapper = new NullAuthoritiesMapper();

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        if (request.getRequestURI().equals(NO_CHECK_URL)) {
            filterChain.doFilter(request, response);
            return;
        }

        // 사용자 요청에서 RefreshToken 추출
        String refreshToken = jwtService.extractRefreshToken(request)
                .filter(jwtService::isTokenValid).orElse(null);

        // 리프레시 토큰이 있다면
        if (refreshToken != null) {
            checkRefreshTokenAndReIssueAccessToken(response, refreshToken);
            return;
        }

        //  리프레시 토큰이 없다면
        if (refreshToken == null) {
            checkAccessTokenAndAuthentication(request, response, filterChain);
        }
    }

    private void checkRefreshTokenAndReIssueAccessToken(HttpServletResponse response,
                                                        String refreshToken) {

        refreshTokenRepository.findById(refreshToken)
                .ifPresent(token -> {
                    String reIssuedRefreshToken = reIssueRefreshToken(token);
                    jwtService.sendAccessTokenAndRefreshToken(response,
                            jwtService.createAccessToken(token.getMemberId()), reIssuedRefreshToken);
                });
    }

    private String reIssueRefreshToken(RefreshToken refreshToken) {
        String reIssuedRefreshToken = jwtService.createRefreshToken();
        refreshTokenRepository.save(
                new RefreshToken(reIssuedRefreshToken, refreshToken.getMemberId()));
        return reIssuedRefreshToken;
    }

    private void checkAccessTokenAndAuthentication(HttpServletRequest request,
                                                   HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        log.info("checkAccessTokenAndAuthentication() 호출");
        jwtService.extractAccessToken(request).filter(jwtService::isTokenValid).ifPresent(
                accessToken -> jwtService.extractId(accessToken).ifPresent(
                        id -> memberRepository.findById(id).ifPresent(this::saveAuthentication)));

        filterChain.doFilter(request, response);
    }

    public void saveAuthentication(Member myMember) {
        String password = myMember.getPwd();
        // 추후 작업할 OAuth를 위한 로직
        if (password == null) {
            password = "22";
        }

        UserDetails userDetails = User.builder().username(myMember.getId()).password(password)
                .roles(myMember.getRole().name()).build();

        Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, null,
                authoritiesMapper.mapAuthorities(userDetails.getAuthorities()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
    }


}