package com.yjh.portfolio.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "profile")
public class Profile {

    @Id
    private Integer id;

    @Column(name = "name_ko", length = 20, nullable = false)
    private String nameKo;

    @Column(name = "name_en", length = 50)
    private String nameEn;

    @Column(name = "birth_date")
    private LocalDate birthDate;

    @Column(length = 1)
    private String gender;

    @Column(length = 30)
    private String nationality;

    @Column(length = 200)
    private String address;

    @Column(length = 20)
    private String phone;

    @Column(length = 100)
    private String email;

    @Column(name = "desired_job", length = 200)
    private String desiredJob;

    @Column(columnDefinition = "TEXT")
    private String summary;

    @Column(name = "github_url", length = 255)
    private String githubUrl;

    @Column(length = 100)
    private String position;

    public Integer getId() { return id; }
    public String getNameKo() { return nameKo; }
    public String getNameEn() { return nameEn; }
    public LocalDate getBirthDate() { return birthDate; }
    public String getGender() { return gender; }
    public String getNationality() { return nationality; }
    public String getAddress() { return address; }
    public String getPhone() { return phone; }
    public String getEmail() { return email; }
    public String getDesiredJob() { return desiredJob; }
    public String getSummary() { return summary; }
    public String getGithubUrl() { return githubUrl; }
    public String getPosition() { return position; }

    public void setId(Integer id) { this.id = id; }
    public void setNameKo(String nameKo) { this.nameKo = nameKo; }
    public void setNameEn(String nameEn) { this.nameEn = nameEn; }
    public void setBirthDate(LocalDate birthDate) { this.birthDate = birthDate; }
    public void setGender(String gender) { this.gender = gender; }
    public void setNationality(String nationality) { this.nationality = nationality; }
    public void setAddress(String address) { this.address = address; }
    public void setPhone(String phone) { this.phone = phone; }
    public void setEmail(String email) { this.email = email; }
    public void setDesiredJob(String desiredJob) { this.desiredJob = desiredJob; }
    public void setSummary(String summary) { this.summary = summary; }
    public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }
    public void setPosition(String position) { this.position = position; }
}
