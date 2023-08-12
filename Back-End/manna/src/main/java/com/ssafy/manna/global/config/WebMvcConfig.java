package com.ssafy.manna.global.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {


        registry.addResourceHandler("/img/**")       //url패턴 설정
                .addResourceLocations("file:////manna/upload/images/member/");    //실제 파일 저장 경로
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

}
