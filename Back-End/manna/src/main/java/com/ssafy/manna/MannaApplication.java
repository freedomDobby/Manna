package com.ssafy.manna;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class MannaApplication {

    public static void main(String[] args) {
        SpringApplication.run(MannaApplication.class, args);
    }

}
