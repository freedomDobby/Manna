package com.ssafy.manna.global.auth.service;

import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("해당 아이디에 해당하는 회원이 존재하지 않습니다."));

        return User.builder()
                .username(member.getId())
                .password(member.getPwd())
                .roles(member.getRole().name())
                .build();
    }
}
