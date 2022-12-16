import { useEffect, useState } from "react";
import { fetchCareers, fetchEducations, fetchSkills } from "~/apis/main";
import Colors from "~/constants/Colors";
import { FlexBox, SizedBox } from "~/constants/Common.style";
import { contacts, info, projects } from "~/constants/data";
import { Body4, Caption2, Title2 } from "~/constants/Typography";
import { EXTRA_BOLD_WEIGHT } from "~/constants/Variables";
import SectionLayout from "~/layouts/SectionLayout";
import * as Styled from "./Main.style";

const Main = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [careers, setCareers] = useState<Common.CareerType[]>([]);
  const [educations, setEducations] = useState<Common.EducationType[]>([]);

  useEffect(() => {
    const getSkills = async () => {
      const skills = await fetchSkills();
      console.log(skills);

      setSkills(skills);
    };

    const getCareers = async () => {
      const careers = await fetchCareers();
      setCareers(careers);
    };

    const getEducations = async () => {
      const educations = await fetchEducations();
      setEducations(educations);
    };

    getSkills();
    getCareers();
    getEducations();
  }, []);

  return (
    <Styled.Container _direction="column" selfAlignRowCenter>
      <FlexBox _direction="column" alignItems="center" as="header">
        <Title2 weight={EXTRA_BOLD_WEIGHT} _color={Colors.white} as="h1">
          {info.닉네임}
        </Title2>
        <SizedBox _height={20} />
        <Title2 weight={EXTRA_BOLD_WEIGHT} _color={Colors.white} as="h2">
          {info.성함}
        </Title2>

        <SizedBox _height={20} />
        <Body4 _color={Colors.white} as="h3">
          {info.직무}
        </Body4>
        <SizedBox _height={10} />
        <Body4 _color={Colors.white} as="h4">
          대한민국
        </Body4>
        <SizedBox _height={40} />
        <article>
          <Body4
            _color={Colors.grayF4}
            lineHeight={28}
            whiteSpace="pre-wrap"
            as="h5"
            moFontSize={14}
          >
            {info.소개.제목}
            {"\n"}
            {info.소개.설명}
          </Body4>
        </article>
      </FlexBox>
      <SizedBox _height={40} />
      {/* 본문 시작 */}
      <FlexBox _direction="column" gap={40} as="main">
        {/* 스킬 */}
        <SectionLayout title="SKILL" list={false}>
          <Styled.SkillWrapper gap={10} as="ul">
            {skills.length === 0 ? (
              <Body4 moFontSize={14} moLineHeight={18}>
                스킬을 불러오고 있습니다.
              </Body4>
            ) : (
              skills.map(skill => (
                <Body4
                  moFontSize={14}
                  key={skill}
                  moLineHeight={18}
                  as="li"
                  _color={Colors.white}
                >
                  {skill}
                </Body4>
              ))
            )}
          </Styled.SkillWrapper>
        </SectionLayout>
        {/* 프로젝트 */}
        <SectionLayout title="PROJECT">
          {projects.map(project => (
            <Styled.ItemWrapper key={project.title}>
              <a
                href={project.link}
                title={`${project.title} 프로젝트 보러가기`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Body4 moFontSize={14} _color={Colors.white}>
                  {project.title}
                </Body4>
              </a>
              <Caption2 _color={Colors.grayF4}>{project.date}</Caption2>
            </Styled.ItemWrapper>
          ))}
        </SectionLayout>
        {/* 경력 */}
        <SectionLayout title="CAREER">
          {careers.length === 0 ? (
            <Body4>경력을 불러오고 있습니다.</Body4>
          ) : (
            careers.map(career => (
              <Styled.ItemWrapper key={career.title}>
                <Body4 moFontSize={14} _color={Colors.white}>
                  {career.title}
                </Body4>
                <Caption2 _color={Colors.grayF4}>{career.date}</Caption2>
              </Styled.ItemWrapper>
            ))
          )}
        </SectionLayout>
        {/* 교육 */}
        <SectionLayout title="EDUCATION">
          {educations ? (
            educations.map(education => (
              <Styled.ItemWrapper gap={6}>
                <Body4 moFontSize={14} _color={Colors.white}>
                  {education?.title}
                </Body4>
                <Body4 moFontSize={14} _color={Colors.white}>
                  {education?.description}
                </Body4>
                <Caption2 _color={Colors.grayF4}>{education?.date}</Caption2>
              </Styled.ItemWrapper>
            ))
          ) : (
            <Body4>교육을 불러오고 있습니다.</Body4>
          )}
        </SectionLayout>
        {/* 연락처 */}
        <SectionLayout title="CONTACT">
          {contacts.map(contact => (
            <Styled.ItemWrapper key={contact.title}>
              {contact.link ? (
                <a
                  href={contact.link ?? "#"}
                  title={`${contact.title} 로 바로가기`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Body4 moFontSize={14} _color={Colors.white}>
                    {contact.title}
                  </Body4>
                </a>
              ) : (
                <Body4 moFontSize={14} _color={Colors.white}>
                  {contact.title}
                </Body4>
              )}
            </Styled.ItemWrapper>
          ))}
        </SectionLayout>
        {/* 추천사 */}
      </FlexBox>
    </Styled.Container>
  );
};

export default Main;
