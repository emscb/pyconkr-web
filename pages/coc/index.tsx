import intl from 'react-intl-universal'
import { H1, H2, H3, Li, Paragraph, Section, Ul } from 'components/atoms/ContentWrappers'
import { IntlText } from 'components/atoms/IntlText'
import { NoticeBar } from 'components/atoms/NoticeBar'
import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'
import PageTemplate from 'components/templates/PageTemplate'
import { inject, observer } from 'mobx-react'
import React from 'react'
import { CORAL, CORAL_DARK, CORAL_LIGHT } from 'styles/colors'
import { StoresType } from '../_app'

@inject('stores')
@observer
export default class CFPDetailedGuide extends React.Component<{ stores: StoresType }> {
  render() {
    return (
      <PageTemplate
        header={<Header title='파이콘 성명서 :: 파이콘 한국 2019' intlKey='coc.pageTitle'/>}
        footer={<Footer />}
      >
        <H1><IntlText intlKey='coc.title'>
          파이콘 한국 행동강령
        </IntlText></H1>
        <Section>
          <H2><IntlText intlKey='coc.paragraph1'>
            의도와 목적
          </IntlText></H2>
          <H3><IntlText intlKey="coc.paragraph1-1">
            파이콘 한국은 모든 참가자를 포용합니다
          </IntlText></H3>
          <Paragraph><IntlText intlKey="coc.paragraph1-1-1">
            파이콘 한국 행동강령(이하 행동강령)은 누구도 배제되지 않는 파이썬 커뮤니티를 위해 구성원들이 지켜야 하는 최소한의 약속입니다.
          </IntlText></Paragraph>
          <Paragraph><IntlText intlKey="coc.paragraph1-1-2">
            파이콘 한국은:
          </IntlText></Paragraph>
          <Ul>
            <Li><IntlText intlKey="coc.paragraph1-1-2-1">
              누구나 편안하게 참여할 수 있는 행사를 지향합니다.
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph1-1-2-2">
              서로 다름을 인정하고 존중하는 분위기를 지향합니다.
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph1-1-2-3">
              성별, 성적 지향, 성 정체성, 국적, 인종, 지역, 종교, 나이, 사회적 신분, 학력, 지식 수준, 외모, 장애, 질병, 음식 선호 등과 관계 없이 모든 참가자가 동등한 컨퍼런스를 지향합니다.
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph1-1-2-4">
              서로 환영하는 분위기를 독려합니다.
            </IntlText></Li>
          </Ul>
          <H3><IntlText intlKey="coc.paragraph1-2">
            모든 참가자를 포용하는 게 왜 중요한가요?
          </IntlText></H3>
          <Paragraph><IntlText intlKey="coc.paragraph1-2-1">
            파이콘 한국은 다양성을 존중하는 태도가 사회와 커뮤니티를 더 풍요롭게 만드는 원천이라고 믿습니다. 어려운 문제에 대한 해결책을 찾고, 커뮤니티가 계속 성장하여 세상에 긍정적인 변화를 불러오기 위해서는 다양한 경험과 관점이 필요합니다. 그리고 다양한 경험과 관점은 다양한 사람들을 모두 존중하고 포용하는 데에서부터 비롯됩니다.
          </IntlText></Paragraph>
          <H3><IntlText intlKey="coc.paragraph1-3">
            파이콘 한국은 차별과 괴롭힘을 용인하지 않습니다
          </IntlText></H3>
          <Paragraph><IntlText intlKey="coc.paragraph1-3-1">
            행동강령에 따라 파이콘 한국 준비위원회는:
          </IntlText></Paragraph>
          <Ul>
            <Li><IntlText intlKey="coc.paragraph1-3-1-1">
              다른 참가자의 안전이 침해되거나 존중받지 못하는 상황이 발생했을 때 이를 중재 또는 제재할 수 있습니다.
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph1-3-1-2">
              필요한 경우 행동강령을 위반한 참가자를 행사장에서 추방할 수 있습니다. 이 경우 참가비는 환불되지 않습니다.
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph1-3-1-3">
              필요 또는 요청에 따라 사법/의료 기관에 신고할 수 있습니다.
            </IntlText></Li>
          </Ul>
          <H3><IntlText intlKey="coc.paragraph1-4">
            행동강령은 행사와 관련된 모든 상황에서 적용됩니다
          </IntlText></H3>
          <Paragraph><IntlText intlKey="coc.paragraph1-4-1">
            행동강령은 파이썬 사용자 그룹이 진행하는 행사와 행사에 수반하는 과정 그리고 그 과정에 참여하는 모든 참가자에게 적용됩니다.
          </IntlText></Paragraph>
          <Ul>
            <Li><IntlText intlKey="coc.paragraph1-4-1-1">
              참가자(발표자, 협력단체, 스폰서, 자원봉사자, 준비위원회 등을 포함한 모든 사람)에게 적용됩니다.
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph1-4-1-2">
              행사장, 웹사이트, 책자, 메일, 소셜 네트워크, 회의, 코드 저장소 등 모든 장소 및 과정과 산출물에 적용됩니다.
            </IntlText></Li>
          </Ul>
          <H3><IntlText intlKey="coc.paragraph1-5">
            주의 깊게 읽어주세요
          </IntlText></H3>
          <Paragraph><IntlText intlKey="coc.paragraph1-5-1">
            해서는 안 되는 일들의 전체 목록이 모두 여기에 담겨있지는 않습니다. 그보다는 이 행동강령에 담긴 내용의 의도가 무엇인지 깊이 파악하고 서로에게 좀 더 잘 대할 수 있도록 해주는 가이드로 삼는 것이 중요합니다. 이 행동강령을 문자 그대로 따르기보다 그 안에 담긴 의도를 파악하시고 행동해주실 것을 부탁드립니다.
          </IntlText></Paragraph>
        </Section>
        <Section>
          <H2><IntlText intlKey="coc.paragraph2">
            커뮤니티
          </IntlText></H2>
          <H3><IntlText intlKey="coc.paragraph2-1">
            환영하는 분위기를 만들어주세요
          </IntlText></H3>
          <Paragraph><IntlText intlKey="coc.paragraph2-1-1">
            모든 참가자는 그들의 배경과 상관없이 환영받고 있다고 느껴야 합니다. 적대적이거나 환영받지 못한다고 느끼는 사람은 커뮤니티 참여를 주저하게 됩니다. 환영하는 분위기를 조성해 파이썬 커뮤니티가 성장할 수 있도록 도와주세요.
          </IntlText></Paragraph>
          <Ul>
              <Li><IntlText intlKey="coc.paragraph2-1-1-1">
                초심자 혹은 행사에 처음 온 분들에게 친절하고 따뜻하게 대해주세요.
              </IntlText></Li>
              <Li>
                <IntlText intlKey="coc.paragraph2-1-1-2">
                  용기를 내주세요.
                </IntlText>
                <Ul>
                  <Li><IntlText intlKey="coc.paragraph2-1-1-2-1">
                    듣거나 지켜보는 게 더 편안하다면 그대로도 괜찮습니다. 만약 대화에 참여하고 싶을 때 망설임이 생긴다면 옆에서 활발하게 대화하고 있는 사람들도 오늘 처음 만났을 수 있다는걸 생각해주세요.
                  </IntlText></Li>
                </Ul>
              </Li>
              <Li>
                <IntlText intlKey="coc.paragraph2-1-1-3">
                  반응해주세요.
                </IntlText>
                <Ul>
                  <Li>
                    <IntlText intlKey="coc.paragraph2-1-1-3-1">
                      당신에게 한 마디를 건네기 위해 상대방은 용기를 냈을지도 모릅니다.
                    </IntlText>
                    <Ul>
                      <Li><IntlText intlKey="coc.paragraph2-1-1-3-1-1">
                        질문이나 도움을 구하는 요청에 친절하게 답해주세요.
                      </IntlText></Li>
                      <Li><IntlText intlKey="coc.paragraph2-1-1-3-1-2">
                        답변에는 감사를 표현해주세요.
                      </IntlText></Li>
                    </Ul>
                  </Li>
                </Ul>
              </Li>
          </Ul>
          <H3><IntlText intlKey="coc.paragraph2-2">
            안전한 파이콘 한국을 만들어주세요
          </IntlText></H3>
          <Paragraph><IntlText intlKey="coc.paragraph2-2-1">
            언제나 스스로의 말과 행동에 책임감을 가져주세요. 파이콘 한국은 다양한 사람들이 함께하는 행사입니다. 모든 사람들이 안전하고 믿을 수 있는 커뮤니티라고 느낄 수 있도록, 다른 사람을 위협하거나 위험하게 만드는 언행을 해서는 안 됩니다.
          </IntlText></Paragraph>
          <Ul>
            <Li>
              <IntlText intlKey="coc.paragraph2-2-1-1">
                타인과 불필요한 신체 접촉을 하지 않도록 주의해주세요.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph2-2-1-1-1">
                  동의 없이 손을 잡거나 어깨동무하는 행위
                </IntlText></Li>
              </Ul>
            </Li>
            <Li>
              <IntlText intlKey="coc.paragraph2-2-1-2">
                대화에 욕설/비속어/은어를 포함하지 마세요.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph2-2-1-2-1">
                  가까운 지인과 대화이더라도 주변 사람에게 불편함을 주거나 위협이 될 수 있습니다.
                </IntlText></Li>
              </Ul>
            </Li>
            <Li><IntlText intlKey="coc.paragraph2-2-1-3">
              화를 내거나 과격한 몸짓, 언성을 높이는 행위 등으로 상대방을 위협하지 마세요.
            </IntlText></Li>
            <Li>
              <IntlText intlKey="coc.paragraph2-2-1-4">
                상대방이 성적으로 수치심을 느낄 수 있는 언어적 표현, 비언어적 행동, 일체의 성적대상화를 하지 말아주세요.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph2-2-1-4-1">
                  “시커먼 남자들끼리만 있어서 칙칙했는데 여성분들 오니까 좋네~ 여기는 꽃밭이네~”
                </IntlText></Li>
                <Li><IntlText intlKey="coc.paragraph2-2-1-4-2">
                  ‘앙 기O찌’를 감탄사로 사용하는 행위
                </IntlText></Li>
              </Ul>
            </Li>
            <Li>
              <IntlText intlKey="coc.paragraph2-2-1-5">
                타인의 소지품을 동의없이 만지지 말아주세요.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph2-2-1-5-1">
                  휴대폰, 노트북 등
                </IntlText></Li>
                  <Li><IntlText intlKey="coc.paragraph2-2-1-5-1-1">
                    <a href='http://knat.go.kr/knw/home/knat_DB/my.html'>장애인 보조기구</a> (보청기, 휠체어 등)
                  </IntlText></Li>
              </Ul>
            </Li>
            <Li>
              <IntlText intlKey="coc.paragraph2-2-1-6">
                위험한 물건을 소지하지 마세요.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph2-2-1-6-1">
                  야구 배트, 화학 물품류, 화기, 날카로운 물건 등
                </IntlText></Li>
              </Ul>
            </Li>
            <Li><IntlText intlKey="coc.paragraph2-2-1-7">
              법에 저촉되는 모든 폭력성을 띤 행위를 하지 말아주세요.
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph2-2-1-8">
              위의 모든 행위를 부추기거나 장려하는 행위를 하지 말아주세요.
            </IntlText></Li>
          </Ul>
          <H3><IntlText intlKey="coc.paragraph2-3">
            서로 다름을 존중해주세요
          </IntlText></H3>
          <Paragraph><IntlText intlKey="coc.paragraph2-3-1">
            성별, 성적 지향, 성 정체성, 국적, 인종, 지역, 종교, 나이, 사회적 신분, 학력, 지식 수준, 외모, 장애, 질병, 음식 선호 등에 상관 없이 함께 즐길 수 있는 행사를 만들어주세요.
          </IntlText></Paragraph>
          <Ul>
            <Li>
              <IntlText intlKey="coc.paragraph2-3-1-1">
                성별 고정관념에 기반한 언행을 자제해주세요.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph2-3-1-1-1">
                  “남자 / 여자 들은 다 그렇죠.”
                </IntlText></Li>
                <Li><IntlText intlKey="coc.paragraph2-3-1-1-2">
                  여성 개발자에게 “프론트엔드 개발자시죠?”라고 넘겨짚는 행위
                </IntlText></Li>
                <Li><IntlText intlKey="coc.paragraph2-3-1-1-3">
                  상대방이 여성이라는 이유로 자신보다 지식 수준이 낮을 거라 생각하고 과도하게 설명하는 행위
                </IntlText></Li>
              </Ul>
            </Li>
            <Li>
              <IntlText intlKey="coc.paragraph2-3-1-2">
                성적 지향, 성 정체성, 성별 표현을 농담의 소재나 비하의 표현으로 사용하지 말아주세요.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph2-3-1-2-1">
                  “게이냐?”, “그렇게 머리가 짧으니 레즈 같다.”
                </IntlText></Li>
              </Ul>
            </Li>
            <Li>
              <IntlText intlKey="coc.paragraph2-3-1-3">
                나이, 사회적 신분, 연차에 의한 차별을 하지 말아주세요.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph2-3-1-3-1">
                  나이가 어리다는 이유로 처음 보는 사람에게 반말하는 행위
                </IntlText></Li>
                <Li><IntlText intlKey="coc.paragraph2-3-1-3-2">
                  “연차가 낮아서 잘 모르시겠지만…”
                </IntlText></Li>
              </Ul>
            </Li>
            <Li><IntlText intlKey="coc.paragraph2-3-1-4">
              소득 및 재산 격차에 따라 다를 수 있는 내용을 단정지어 얘기하지 말아주세요.
            </IntlText></Li>
            <Li>
              <IntlText intlKey="coc.paragraph2-3-1-5">
                인종을 비하하거나 지역 또는 국적 편견에 기반한 표현을 자제해주세요.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph2-3-1-5-1">
                  쪽O리, 죠O징, 짱O 같은 국적에 따른 차별 발언
                </IntlText></Li>
                <Li><IntlText intlKey="coc.paragraph2-3-1-5-2">
                  흑형, 양키, 바나나와 같은 인종에 따른 차별 발언
                </IntlText></Li>
                <Li><IntlText intlKey="coc.paragraph2-3-1-5-3">
                  전OO언과 같은 지역에 따른 차별 발언
                </IntlText></Li>
              </Ul>
            </Li>
            <Li>
              <IntlText intlKey="coc.paragraph2-3-1-6">
                다른 사람의 종교나 지지 정당을 비하하거나 자신의 신념을 강요하지 말아주세요.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph2-3-1-6-1">
                  “OO교 사람들은 이래서 안돼”
                </IntlText></Li>
                <Li><IntlText intlKey="coc.paragraph2-3-1-6-2">
                  “OO당 사람들은 이래서 안돼”
                </IntlText></Li>
              </Ul>
            </Li>
            <Li>
              <IntlText intlKey="coc.paragraph2-3-1-7">
                상대방의 외모에 대한 불필요한 평가나 차별 발언을 하지 않도록 주의해주세요.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph2-3-1-7-1">
                  “OO님은 개발자처럼 생기셨어요/안 생기셨어요”
                </IntlText></Li>
                <Li><IntlText intlKey="coc.paragraph2-3-1-7-2">
                  (누군가를 특정할 때) “얼굴이 예쁘장했던 여자 개발자”
                </IntlText></Li>
              </Ul>
            </Li>
            <Li>
              <IntlText intlKey="coc.paragraph2-3-1-8">
                장애인을 도움이 필요한 대상으로 보고 편견에 기반한 행동을 하지 말아주세요.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph2-3-1-8-1">
                  요청하지 않았는데 자신이 생각한 방식으로 행동하는 것은 방해입니다. 먼저 상대의 의사를 확인하고 상대가 요청하는 방식으로 편의 제공을 해야합니다.
                </IntlText></Li>
              </Ul>
            </Li>
            <Li>
              <IntlText intlKey="coc.paragraph2-3-1-9">
                질병 또는 장애를 비하하지 마세요.
              </IntlText>
              <Ul>
                <Li>
                  <IntlText intlKey="coc.paragraph2-3-1-9-1">
                    장애를 비하하는 단어를 사용 하지 말아주세요.
                  </IntlText>
                  <Ul>
                    <Li><IntlText intlKey="coc.paragraph2-3-1-9-1-1">
                      장님, 애꾸눈, 귀머거리, 벙어리, 절름발이 등
                    </IntlText></Li>
                  </Ul>
                </Li>
                <Li><IntlText intlKey="coc.paragraph2-3-1-9-2">
                  “장애인이냐?”, “정신병자 같지 않아?”
                </IntlText></Li>
                <Li><IntlText intlKey="coc.paragraph2-3-1-9-3">
                  “레거시 코드 때문에 암 걸릴 것 같아.”
                </IntlText></Li>
              </Ul>
            </Li>
            <Li>
              <IntlText intlKey="coc.paragraph2-3-1-10">
                다른 식습관을 강요하거나 무시하는 언행을 하지 말아주세요.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph2-3-1-10-1">
                  “술을 안 마시면 인생을 무슨 낙으로 살아요?”
                </IntlText></Li>
                <Li><IntlText intlKey="coc.paragraph2-3-1-10-2">
                  “건강을 생각해서라도 고기를 먹어야지.”
                </IntlText></Li>
                <Li><IntlText intlKey="coc.paragraph2-3-1-10-3">
                  식습관에는 다른 사람이 납득할 만한 이유가 필요하지 않습니다. 이유를 묻거나 설명을 강요하지 말아주세요.
                </IntlText></Li>
              </Ul>
            </Li>
            <Li>
              <IntlText intlKey="coc.paragraph2-3-1-11">
                학력이나 전공에 따라 차별하는 발언을 하지 말아주세요.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph2-3-1-11-1">
                  “고졸이세요?”
                </IntlText></Li>
                <Li><IntlText intlKey="coc.paragraph2-3-1-11-2">
                  “비전공자면 이런 내용 모르시겠네요"
                </IntlText></Li>
              </Ul>
            </Li>
            <Li><IntlText intlKey="coc.paragraph2-3-1-12">
              위의 모든 편견과 차별을 부추기거나 장려하는 행위를 하지 말아주세요.
            </IntlText></Li>
          </Ul>
          <Paragraph><IntlText intlKey="coc.paragraph2-3-2">
            당신의 언행은 당신의 의도와 다르게 받아들여질 수 있습니다. 상대방이 불쾌하게 여긴다면 해당 언행을 중지해주세요.
          </IntlText></Paragraph>
        </Section>
        <Section>
          <H2><IntlText intlKey="coc.paragraph3">
            의사 소통
          </IntlText></H2>
          <H3><IntlText intlKey="coc.paragraph3-1">
            발표장 내에서는 발표자를 존중해주세요
          </IntlText></H3>
          <Ul>
            <Li><IntlText intlKey="coc.paragraph3-1-1">
              발표 중에는 발표자나 다른 청중들에게 방해되는 행동을 하거나 소음을 내지 말아주세요.
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph3-1-2">
              발표자가 분명한 의사를 표명하기 전까진 발표를 중간에 끊는 행위는 제한됩니다. 질문은 정해진 시간에 정해진 방법대로 해주세요.
            </IntlText></Li>
          </Ul>
          <H3><IntlText intlKey="coc.paragraph3-2">
            대화는 같이 하는 것입니다
          </IntlText></H3>
          <Paragraph><IntlText intlKey="coc.paragraph3-2-1">
            열린공간과 같은 곳에서는 많은 사람들이 대화에 참여합니다. 나의 의견만큼 다른 사람의 의견도 중요함을 항상 기억해주세요. 말을 끊고 방해하거나 언성을 높이는 일은 자제해주세요.
          </IntlText></Paragraph>
          <Ul>
            <Li><IntlText intlKey="coc.paragraph3-2-1-1">
              발언 기회를 소수가 과하게 점유하지 않도록 주의해주세요. 발언 기회를 골고루 가져요.
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph3-2-1-2">
              상대와 갈등이 생기더라도 정중한 태도를 유지해주세요.
            </IntlText></Li>
          </Ul>
          <H3><IntlText intlKey="coc.paragraph3-3">
            건설적인 토론을 해주세요
          </IntlText></H3>
          <Paragraph><IntlText intlKey="coc.paragraph3-3-1">
            우리는 서로 다른 배경과 지식을 가지고 있습니다. 의견의 불일치는 자연스러운 일입니다.
          </IntlText></Paragraph>
          <Paragraph><IntlText intlKey="coc.paragraph3-3-2">
            비판과 비난은 다릅니다. 건설적인 비판은 커뮤니티와 구성원의 발전에 도움이 됩니다. 하지만 남을 깎아내리고 상처 주기 위한 목적의 비난은 금지됩니다. 상대방과 생각이 다르다면 정중하고 올바른 방법으로 의견을 이야기해주세요. 올바른 비판에는 관대하게 수용하는 자세를 가져주세요.
          </IntlText></Paragraph>
          <Ul>
            <Li>
              <IntlText intlKey="coc.paragraph3-3-2-1">
                정중한 표현을 사용해주세요.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph3-3-2-1-1">
                  그 언어/라이브러리/운영체제는 쓰레기야 X
                </IntlText></Li>
                <Li><IntlText intlKey="coc.paragraph3-3-2-1-2">
                  그 언어/라이브러리/운영체제는 OO한 단점이 있다고 생각해 O
                </IntlText></Li>
              </Ul>
            </Li>
            <Li>
              <IntlText intlKey="coc.paragraph3-3-2-2">
                사람이 아닌 내용을 비판해주세요.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph3-3-2-2-1">
                  OO 이론을 믿는 사람들은 멍청한 사람들이야 X
                </IntlText></Li>
                <Li><IntlText intlKey="coc.paragraph3-3-2-2-2">
                  OO 이론은 근거가 부족한 이론이야 O
                </IntlText></Li>
              </Ul>
            </Li>
            <Li><IntlText intlKey="coc.paragraph3-3-2-3">
              결점이나 문제점이 아닌 대안에 집중해주세요.
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph3-3-2-4">
              내 지식을 과시하기 위해 다른 사람을 망신주지 마세요.
            </IntlText></Li>
          </Ul>
          <H3><IntlText intlKey="coc.paragraph3-4">
            일방적인 선전이나 선동을 하지 말아주세요
          </IntlText></H3>
          <Paragraph><IntlText intlKey="coc.paragraph3-4-1">
            개인의 생각과 정치적 성향은 존중되어야 합니다. 하지만 다른 참가자의 원활한 행사 참여를 방해하거나 문맥과 상관없는 일방적 선전이나 선동은 금지됩니다.
          </IntlText></Paragraph>
          <Ul>
            <Li><IntlText intlKey="coc.paragraph3-4-1-1">
              발표 슬라이드에 정치적 구호를 담는 행위
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph3-4-1-2">
              부스 앞에서 집단으로 구호를 외치는 행위
            </IntlText></Li>
          </Ul>
        </Section>
        <Section>
          <H2><IntlText intlKey="coc.paragraph4">
            프라이버시
          </IntlText></H2>
          <H3><IntlText intlKey="coc.paragraph4-1">
            사진과 영상을 촬영할 때 주의해주세요
          </IntlText></H3>
          <Paragraph><IntlText intlKey="coc.paragraph4-1-1">
            사진과 영상을 찍을 때는 반드시 찍히는 인물의 의사를 존중해주세요. 사진과 영상에 찍히는 것을 원하지 않는 사람도 있을 수 있습니다.
          </IntlText></Paragraph>
          <Ul>
            <Li>
              <IntlText intlKey="coc.paragraph4-1-1-1">
                파이콘 한국 준비위원회가 운영하는 모든 행사는 사진과 영상에 찍히는 것을 원하지 않는 사람들을 위한 방법이 마련됩니다.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph4-1-1-1-1">
                  구체적인 의사 표현 방법은 각 행사마다 별도로 공지됩니다.
                </IntlText></Li>
              </Ul>
            </Li>
          </Ul>
          <H3><IntlText intlKey="coc.paragraph4-2">
            사적인 정보를 지켜주세요
          </IntlText></H3>
          <Ul>
            <Li><IntlText intlKey="coc.paragraph4-2-1">
              상대방이 질문에 대답하기를 원하지 않는다면, 재차 묻지 말아 주세요. 다른 사람의 의사를 존중해주세요.
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph4-2-2">
              나에겐 알려져도 문제가 없는 정보라도 다른 사람에게는 그렇지 않을 수 있음을 이해해주세요.
            </IntlText></Li>
            <Li>
              <IntlText intlKey="coc.paragraph4-2-2-1">
                어떠한 질문은 그 자체로 큰 실례가 되기도 합니다.
              </IntlText>
              <Ul>
                <Li><IntlText intlKey="coc.paragraph4-2-2-1-1">
                  “나이가 어떻게 되세요?”
                </IntlText></Li>
                <Li><IntlText intlKey="coc.paragraph4-2-2-1-2">
                  “결혼하셨어요?”, “아이가 있으세요?”, “애인 있으세요?”
                </IntlText></Li>
                <Li><IntlText intlKey="coc.paragraph4-2-2-1-3">
                  “드시는 약은 어떤 약인가요?”
                </IntlText></Li>
                <Li><IntlText intlKey="coc.paragraph4-2-2-1-4">
                  “어떻게 하다가 장애를 갖게 되셨나요?”
                </IntlText></Li>
              </Ul>
            </Li>
          </Ul>
        </Section>
        <Section>
          <H2><IntlText intlKey="coc.paragraph5">
            영리 행위
          </IntlText></H2>
          <Paragraph><IntlText intlKey="coc.paragraph5-1">
            파이콘 한국은 허가를 받지 않은 단체의 영리 행위를 금지합니다. 영리 행위는 물건을 팔아서 이득을 취하는 행위, 당장 이득을 취하지는 않지만 장기적으로 개인 혹은 단체가 금전적인 이득을 취할 수 있는 행위를 의미합니다.
          </IntlText></Paragraph>
          <Ul>
            <Li><IntlText intlKey="coc.paragraph5-1-1">
              직업 소개 등을 구실로 참가자들에게 접근해 개인 정보를 물어보는 행위
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph5-1-2">
              행사장에서 무단으로 전단지를 배포하는 행위
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph5-1-3">
              기타 영리 행위
            </IntlText></Li>
          </Ul>
          <Paragraph><IntlText intlKey="coc.paragraph5-2">
            파이콘 한국의 허가를 받지 않은 영리 행위가 발견될 경우, 원활한 행사 진행을 위해 법적 조치를 취할 수 있습니다.
          </IntlText></Paragraph>
        </Section>
        <Section>
          <H2><IntlText intlKey="coc.paragraph6">
            공중 도덕
          </IntlText></H2>
          <Paragraph><IntlText intlKey="coc.paragraph6-1">
            파이콘 한국이 진행되는 공간은 많은 사람들이 모이는 공공장소입니다. 모두가 쾌적하게 행사를 즐길 수 있도록 공중 도덕을 지켜주세요.
          </IntlText></Paragraph>

          <H3><IntlText intlKey="coc.paragraph6-2">
            소음을 줄여주세요
          </IntlText></H3>
          <Ul>
            <Li><IntlText intlKey="coc.paragraph6-2-1">
              이어폰/헤드폰을 사용하지 않고 큰 소리로 재생하는 영상/음악 소리
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph6-2-2">
              마이크나 확성기를 이용한 부대 행사 진행
            </IntlText></Li>
          </Ul>
          <H3><IntlText intlKey="coc.paragraph6-3">
            공간을 깨끗하게 사용해주세요
          </IntlText></H3>
          <Ul>
            <Li><IntlText intlKey="coc.paragraph6-3-1">
              행사가 열리는 공간의 규칙을 준수해주세요.
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph6-3-2">
              자기가 사용한 자리는 깨끗하게 치워주세요.
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph6-3-3">
              쓰레기는 쓰레기통에 버려주세요. 재활용품은 분리수거 규칙을 지켜주세요.
            </IntlText></Li>
          </Ul>
        </Section>
        <Section>
          <H2><IntlText intlKey="coc.paragraph7">
            신고하기
          </IntlText></H2>
          <H3><IntlText intlKey="coc.paragraph7-1">
            이렇게 신고해주세요
          </IntlText></H3>
          <Paragraph><IntlText intlKey="coc.paragraph7-1-1">
            당신에게 어떤 문제가 발생했거나 다른 사람이 문제에 처한 것을 보셨거나, 불편 사항이 있으시다면 파이콘 한국 준비위원회나 현장에 있는 스태프에게 도움을 요청해주세요. 위급한 상황이라면 스태프에게 도움을 청함과 동시에 경찰, 소방서 등 관할 기관에 신고해주세요.
          </IntlText></Paragraph>
          <Ul>
            <Li><IntlText intlKey="coc.paragraph7-1-1-1">
              대표 연락처</IntlText> <a href='mailto:coc@pycon.kr'>coc@pycon.kr</a>
            </Li>
            <Li><IntlText intlKey="coc.paragraph7-1-1-2">
              스태프는 눈에 띄는 티셔츠를 입고 있으며 행동강령을 위반했을 때 어떻게 조치해야 하는지 교육을 받은 상태입니다.
            </IntlText></Li>
          </Ul>
          <Paragraph><IntlText intlKey="coc.paragraph7-1-2">
            행동강령 위반 행위가 접수되면 파이콘 한국 준비위원회는 <a href='https://github.com/pythonkr/pycon-code-of-conduct/blob/korean/Attendee%20Procedure%20for%20incident%20handling.md'>사건 처리 절차</a>에 따라 즉시 참가자를 보호하고, 위반 행위가 중단되도록 대응할 것입니다. 필요한 경우 행사장 퇴장 등의 조치나 사법/의료 기관에 연락을 취할 것입니다. 이 과정에서 신고자나 피해자의 신원보호에 최선을 다할 것입니다.
          </IntlText></Paragraph>
          <Paragraph><IntlText intlKey="coc.paragraph7-1-3">
            행동강령 위반이 의심되지만 확신이 들지 않는 경우에도 준비위원회에 알려주시면 준비위원회에서 정보를 더 수집하고 판단하여 조치를 취하거나 취하지 않을 것입니다.
          </IntlText></Paragraph>
          <Paragraph><IntlText intlKey="coc.paragraph7-1-4">
            여러분의 용기가 더욱 안전한 커뮤니티를 만드는 데 도움이 됩니다.
          </IntlText></Paragraph>
          <H3><IntlText intlKey="coc.paragraph7-2">
            행동강령에는 이런 한계가 있어요
          </IntlText></H3>
          <Paragraph><IntlText intlKey="coc.paragraph7-2-1">
            안전하고 쾌적한 커뮤니티를 위한 다양한 노력에도 불구하고, 행동강령이 모든 위협으로부터 참가자들을 완전하게 보호할 수는 없습니다.
          </IntlText></Paragraph>
          <Ul>
            <Li><IntlText intlKey="coc.paragraph7-2-1-1">
              위급한 상황이라면 스태프에게 도움을 청함과 동시에 경찰, 소방서 등 관할 기관에 신고해주세요.
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph7-2-1-2">
              사실 확인이 어려운 경우 심증만으로 피신고자나 단체에 조치를 취하기는 어렵습니다. 조치 여부와 관계 없이 위협을 느끼신다면 동행 등의 도움을 드릴 수 있습니다.
            </IntlText></Li>
          </Ul>
        </Section>
        <Section>
          <H2><IntlText intlKey="coc.paragraph8">
            당부의 말
          </IntlText></H2>
          <H3><IntlText intlKey="coc.paragraph8-1">
            준비위원회를 존중해주세요
          </IntlText></H3>
          <Paragraph><IntlText intlKey="coc.paragraph8-1-1">
            파이콘 한국 준비위원회 구성원은 모두 여러분과 같은 파이썬 커뮤니티의 일원이며, 파이콘 한국을 위해 대가 없이 자발적으로 시간과 노력을 제공하고 있습니다.
          </IntlText></Paragraph>
          <Paragraph><IntlText intlKey="coc.paragraph8-1-2">
            파이콘 한국 준비위원회는 참가자분들을 존중하며 도움을 드리기 위해 노력하고 있습니다. 여러분도 파이콘 한국 준비위원회를 존중해주시길 부탁드립니다.
          </IntlText></Paragraph>
          <Ul>
            <Li><IntlText intlKey="coc.paragraph8-1-2-1">
              원활한 행사 진행을 위해 명찰 패용 등의 협조를 요청할 수 있습니다. 현장에서 준비위원회의 요청을 존중하고 따라주세요.
            </IntlText></Li>
            <Li><IntlText intlKey="coc.paragraph8-1-2-2">
              준비위원회 구성원의 사생활은 보호되어야 합니다. 행사에 관해 궁금점이 있다면 파이콘 준비위원회 구성원 개인의 SNS가 아닌 공식 채널로 문의해주세요.
            </IntlText></Li>
          </Ul>
          <Paragraph><IntlText intlKey="coc.paragraph8-1-3">
            파이콘 한국 준비위원회 구성원 모두는 다른 모든 참가자들과 동일하게 행동강령을 지킬 것이며, 파이콘 한국 준비위원회 구성원이 행동강령을 위반하는 경우 다른 참가자들과 동일한 절차와 기준으로 공정하게 대응할 것입니다.
          </IntlText></Paragraph>
        </Section>
        <Section>
          <H2><IntlText intlKey="coc.paragraph9">
            기여하기
          </IntlText></H2>
          <Paragraph><IntlText intlKey="coc.paragraph9-1">
            본 파이콘 한국 행동강령은 의도와 목적, 지향하는 가치를 더 잘 전달하기 위해 내용이 변경될 수 있습니다. 여러분의 기여를 통해 파이콘 한국 행동강령은 지속적으로 발전할 수 있습니다.
          </IntlText></Paragraph>
          <H3><IntlText intlKey="coc.paragraph9-2">
            이런 걸 참고했어요
          </IntlText></H3>
          <Paragraph><IntlText intlKey="coc.paragraph9-2-1">
            파이콘 한국 행동강령의 내용들은 다음과 같이 앞서서 고민한 사람들의 생각을 참고하였습니다.
          </IntlText></Paragraph>
          <Paragraph><IntlText intlKey="coc.paragraph9-2-2">
            참고한 문서
          </IntlText></Paragraph>
          <Ul>
            <Li><a href='https://www.elastic.co/kr/community/codeofconduct'><IntlText intlKey="coc.paragraph9-2-2-1">
              Elastic 커뮤니티 행동규범
            </IntlText></a></Li>
            <Li><a href='https://spoqa.github.io/2018/06/28/code-of-conduct.html'><IntlText intlKey="coc.paragraph9-2-2-2">
              스포카 크리에이터 행동강령
            </IntlText></a></Li>
            <Li><a href='https://opensource.guide/ko/code-of-conduct/'><IntlText intlKey="coc.paragraph9-2-2-3">
              Github Open Source Guides 행동강령
            </IntlText></a></Li>
            <Li><a href='https://www.openstack.org/legal/community-code-of-conduct/'><IntlText intlKey="coc.paragraph9-2-2-4">
              OpenStack Code of Conduct
            </IntlText></a></Li>
            <Li><a href='https://2019.jsconf.eu/code-of-conduct/'><IntlText intlKey="coc.paragraph9-2-2-5">
              JSConf EU 2019 행동강령
            </IntlText></a></Li>
            <Li><a href='https://2019.jsconfkorea.com/coc'><IntlText intlKey="coc.paragraph9-2-2-6">
              JSConf Korea 2019 행동강령
            </IntlText></a></Li>
            <Li><a href='https://medium.com/@defcon201/about-us-defcon-201-code-of-conduct-dfe0f26bfd49'><IntlText intlKey="coc.paragraph9-2-2-7">
              DEFCON 행동강령
            </IntlText></a></Li>
            <Li><a href='https://us.pycon.org/2019/about/code-of-conduct/'><IntlText intlKey="coc.paragraph9-2-2-8">
              PyCon US 2019 행동강령
            </IntlText></a></Li>
            <Li><a href='https://medium.com/@mxsash/how-and-why-we-improved-djangocon-europes-code-of-conduct-8c203eb591ee'>How and why we improved DjangoCon Europe’s Code of Conduct</a></Li>
          </Ul>
          <H2><IntlText intlKey="coc.paragraph10">
            제안할 내용이 있다면 기여해주세요
          </IntlText></H2>
          <Paragraph><IntlText intlKey="coc.paragraph10-1">
            파이콘 한국 행동강령은 더 나은 커뮤니티를 위해 계속해서 변화하고 있습니다. 파이콘 한국 준비위원회와 많은 사람들의 노력에도 불구하고, 본 행동강령에는 여전히 개선할 점이 존재합니다.
          </IntlText></Paragraph>
          <Paragraph><IntlText intlKey="coc.paragraph10-2">
            행동강령을 개선하는 과정에 여러분도 동참할 수 있습니다. 제안, 의견 혹은 행동강령과 관련된 어떠한 내용이라도 언제든지 자유롭게 <a href='mailto:coc@pycon.kr'>coc@pycon.kr</a> 로 보내주세요. 보내주신 의견은 준비위원회가 면밀히 검토하겠습니다.
          </IntlText></Paragraph>
          <Paragraph><IntlText intlKey="coc.paragraph10-3">
            파이콘 한국 준비위원회는 투명성과 기록의 가치를 믿습니다. 행동강령에 변경 사항이 있다면 그 내역을 모두 기록하고 웹사이트를 통해 공개할 것입니다.
          </IntlText></Paragraph>
          <Paragraph><a href='https://github.com/pythonkr/pycon-code-of-conduct/releases'><IntlText intlKey="coc.paragraph10-4">
            릴리즈 노트
          </IntlText></a></Paragraph>
          <Paragraph><IntlText intlKey="coc.paragraph10-5">
            본 행동강령은 파이콘 한국 2019 준비위원회가 외부 전문가들의 자문을 받아 작성하였습니다.
          </IntlText></Paragraph>
        </Section>
      </PageTemplate>
    )
  }
}
