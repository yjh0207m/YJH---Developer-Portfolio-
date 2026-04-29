package com.yjh.portfolio.service;

import com.yjh.portfolio.dto.ContactDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final JavaMailSender mailSender;

    @Value("${mail.to:yjh0207m@naver.com}")
    private String mailTo;

    public ContactService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void send(ContactDto dto) {
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
