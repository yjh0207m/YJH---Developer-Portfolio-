package com.yjh.portfolio.service;

import com.yjh.portfolio.dto.ContactDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    @Autowired(required = false)
    private JavaMailSender mailSender;

    @Value("${mail.to:yjh0207m@naver.com}")
    private String mailTo;

    public void send(ContactDto dto) {
        if (mailSender == null) {
            throw new IllegalStateException("메일 서버가 설정되지 않았습니다.");
        }
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(mailTo);
        msg.setSubject("[포트폴리오 문의] " + dto.name());
        msg.setText(
                "보낸 이: " + dto.name() + "\n" +
                "이메일: " + dto.email() + "\n\n" +
                dto.message()
        );
        msg.setReplyTo(dto.email());
        mailSender.send(msg);
    }
}
