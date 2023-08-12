package com.ssafy.manna.sogaeting.service;

import com.ssafy.manna.global.common.domain.Session;
import com.ssafy.manna.global.common.service.SessionService;
import com.ssafy.manna.member.Enums.BanCode;
import com.ssafy.manna.member.domain.Ban;
import com.ssafy.manna.member.domain.Member;
import com.ssafy.manna.member.repository.MemberRepository;
import com.ssafy.manna.sogaeting.domain.Sogaeting;
import com.ssafy.manna.sogaeting.dto.request.*;
import com.ssafy.manna.sogaeting.dto.response.ImageMappedSogaetingMemberResponse;
import com.ssafy.manna.sogaeting.dto.response.SogaetingMemberResponse;
import com.ssafy.manna.sogaeting.dto.response.SogaetingMemberResponsePage;
import com.ssafy.manna.sogaeting.repository.CustomSogaetingRepository;
import com.ssafy.manna.sogaeting.repository.SogaetingRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.ssafy.manna.sogaeting.enums.SogaetingEnum.NUM_IMAGE;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class SogaetingServiceImpl implements SogaetingService {

    private final MemberRepository memberRepository;
    private final CustomSogaetingRepository customSogaetingRepository;
    private final SessionService sessionService;
    private final ModelMapper modelMapper;
    private final SogaetingRepository sogaetingRepository;

    private static String subStringLast(SogaetingMemberResponse sogaetingMemberResponse) {
        return StringUtils.substringAfterLast(sogaetingMemberResponse.getPictureURL(), "/");
    }

    @Override
    public void report(SogaetingReportRequest sogaetingReportRequest) throws Exception {

        Member member = memberRepository.findById(sogaetingReportRequest.getMemberId())
                .orElseThrow(() -> new Exception("일치하는 회원이 없습니다."));

        Ban ban = Ban.builder()
                .member(member)
                .opponent(member)
                .context(sogaetingReportRequest.getContext())
                .code(BanCode.valueOf(sogaetingReportRequest.getCode()))
                .build();
    }

    @Override
    public void Like(SogaetingLikeRequest sogaetingLikeRequest) throws Exception {
        Member sendMember = memberRepository.findById(sogaetingLikeRequest.getSenderId())
                .orElseThrow(() -> new Exception("일치하는 회원이 없습니다."));
        Member receiverMember = memberRepository.findById(sogaetingLikeRequest.getReceiverId())
                .orElseThrow(() -> new Exception("일치하는 회원이 없습니다."));
    }

    @Override
    public SogaetingMemberResponsePage findMemberByCondition(
            SogaetingFilteringRequest sogaetingFilteringRequest) {

        PageRequest pageRequest = get2PageRequest(sogaetingFilteringRequest);
        Page<SogaetingMemberResponse> pagingDto = customSogaetingRepository.findMemberByCondition(
                sogaetingFilteringRequest, pageRequest);

        List<SogaetingMemberResponse> content = pagingDto.getContent();
        int totalPages = pagingDto.getTotalPages();

        return new SogaetingMemberResponsePage(sogaetingFilteringRequest.getCurPage(), totalPages,
                mappingImageList(content));
    }

    @Override
    public SogaetingMemberResponsePage findMemberByConditionAndLocate(
            SogaetingFilteringRequest sogaetingFilteringRequest) {
        String sido = getSidoByMemberId(sogaetingFilteringRequest);
        PageRequest pageRequest = get4PageRequest(sogaetingFilteringRequest);

        Page<SogaetingMemberResponse> pagingDto = customSogaetingRepository.findMemberByConditionAndLocate(
                pageRequest, sido, sogaetingFilteringRequest);
        int totalPages = pagingDto.getTotalPages();

        return new SogaetingMemberResponsePage(sogaetingFilteringRequest.getCurPage(), totalPages,
                mappingImageList(pagingDto.getContent()));
    }

    @Override
    public SogaetingMemberResponsePage findMemberByConditionAndOnlineState(
            SogaetingFilteringRequest sogaetingFilteringRequest) {
        PageRequest pageRequest = get2PageRequest(sogaetingFilteringRequest);

        List<String> onlineMembersId = getOnlineMembersId();
        Page<SogaetingMemberResponse> pagingDto = customSogaetingRepository.findMemberByConditionAndOnlineState(
                onlineMembersId, pageRequest, sogaetingFilteringRequest);

        List<SogaetingMemberResponse> content = pagingDto.getContent();
        int totalPages = pagingDto.getTotalPages();

        return new SogaetingMemberResponsePage(sogaetingFilteringRequest.getCurPage(), totalPages,
                mappingImageList(content));
    }

    @Override
    public SogaetingMemberResponsePage findMemberByConditionAndOnlineStateAndLocate(
            SogaetingFilteringRequest sogaetingFilteringRequest) {
        String sido = getSidoByMemberId(sogaetingFilteringRequest);

        PageRequest pageRequest = get4PageRequest(sogaetingFilteringRequest);

        List<String> onlineMembersId = getOnlineMembersId();
        Page<SogaetingMemberResponse> pagingDto = customSogaetingRepository.findMemberByConditionAndOnlineStateAndLocate(
                onlineMembersId, pageRequest, sido, sogaetingFilteringRequest);
        int totalPages = pagingDto.getTotalPages();

        return new SogaetingMemberResponsePage(sogaetingFilteringRequest.getCurPage(), totalPages,
                mappingImageList(pagingDto.getContent()));
    }

    // 소개팅 시작하기
    @Override
    public void start(SogaetingStartRequest sogaetingStartRequest) {
        Member findMaleMember = memberRepository.findById(sogaetingStartRequest.getMaleId()).orElseThrow(() -> new RuntimeException("일치하는 회원이 없습니다."));
        Member findFemaleMember = memberRepository.findById(sogaetingStartRequest.getFemaleId()).orElseThrow(() -> new RuntimeException("일치하는 회원이 없습니다."));

        Sogaeting sogaeting = Sogaeting.builder()
                .female(findFemaleMember)
                .male(findMaleMember)
                .isSuccess(false)
                .build();

        sogaetingRepository.save(sogaeting);
    }

    // 소개팅 성공 저장
    @Override
    public void success(SogaetingSuccessRequest sogaetingSuccessRequest) {
        Sogaeting sogaeting = sogaetingRepository.findByMaleIdAndFemaleId(sogaetingSuccessRequest.getMaleId(), sogaetingSuccessRequest.getFemaleId());

        sogaeting.updateIsSuccess(true);
        sogaetingRepository.save(sogaeting);

    }

    private PageRequest get2PageRequest(SogaetingFilteringRequest sogaetingFilteringRequest) {
        return PageRequest.of(sogaetingFilteringRequest.getCurPage(), 2 * NUM_IMAGE.getValue());
    }

    private PageRequest get4PageRequest(SogaetingFilteringRequest sogaetingFilteringRequest) {
        return PageRequest.of(sogaetingFilteringRequest.getCurPage(), 4 * NUM_IMAGE.getValue());
    }

    private List<String> getOnlineMembersId() {
        List<Session> onlineMembers = sessionService.findOnlineMembers();
        return onlineMembers.stream().map(Session::getUserId).toList();
    }

    private void updateOnlineStateAndBirthUnit(List<ImageMappedSogaetingMemberResponse> findMembers) {
        for (ImageMappedSogaetingMemberResponse findMember : findMembers) {
            findMember.updateOnlineState(sessionService.checkMemberIsOnline(findMember.getId()));
            findMember.updateBirthUnit();
        }
    }

    private String getSidoByMemberId(SogaetingFilteringRequest sogaetingFilteringRequest) {
        Member member = memberRepository.findById(sogaetingFilteringRequest.getMemberId())
                .orElseThrow(() -> new RuntimeException("일치하는 회원이 없습니다."));
        return member.getMemberDetail().getAddress().getSido();
    }

    private List<ImageMappedSogaetingMemberResponse> mappingImageList(
            List<SogaetingMemberResponse> content) {
        Map<String, ImageMappedSogaetingMemberResponse> map = new HashMap<>();
        for (SogaetingMemberResponse sogaetingMemberResponse : content) {
            mapping(map, sogaetingMemberResponse);
        }

        List<ImageMappedSogaetingMemberResponse> list = map.values().stream().toList();
        updateOnlineStateAndBirthUnit(list);
        return list;
    }

    private void mapping(Map<String, ImageMappedSogaetingMemberResponse> map,
                         SogaetingMemberResponse sogaetingMemberResponse) {
        if (!map.containsKey(sogaetingMemberResponse.getId())) {
            initializeMapping(map, sogaetingMemberResponse);
        }

        map.get(sogaetingMemberResponse.getId()).getPictureURLs()
                .add(subStringLast(sogaetingMemberResponse));
    }

    private void initializeMapping(Map<String, ImageMappedSogaetingMemberResponse> map,
                                   SogaetingMemberResponse sogaetingMemberResponse) {
        ImageMappedSogaetingMemberResponse imageMappedSogaetingMemberResponse = new ImageMappedSogaetingMemberResponse();

        modelMapper.map(sogaetingMemberResponse, imageMappedSogaetingMemberResponse);
        map.put(imageMappedSogaetingMemberResponse.getId(),
                imageMappedSogaetingMemberResponse);
    }
}
