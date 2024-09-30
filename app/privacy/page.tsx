import AgreementFirst from "@/components/tables/AgreementFirst";
import AgreementSecond from "@/components/tables/AgreementSecond";

const PrivacyPage = () => {
  return (
    <main className="py-12 lg:px-16 md:px-8 px-4 max-w-4xl mx-auto space-y-6 leading-relaxed">
      <h1 className="thirty text-center font-bold">개인정보취급방침</h1>
      <p>
        {`(이하 "회사"라 함)은 이용자들의 개인정보 보호를 매우 중요시하며, 이용자가 회사의 서비스(이하 "" 또는 ""라 함)를 이용함과 동시에 회사에 제공한 개인정보가 보호받을 수 있도록 최선을 다하고 있습니다.`}
      </p>
      <p className="w-full">
        이에 회사는 통신비밀보호법, 전기통신사업법, 정보 통신망 이용 촉진 등에
        관한 법률 등 정보통신서비스제공자가 준수하여야 할 관련 법규상의
        개인정보보호규정 및 정보통신부가 제정한 개인정보보호지침을 준수하고
        있습니다.
      </p>
      <p>
        회사는 개인정보 보호정책을 통하여 이용자들이 제공하는 개인정보가 어떠한
        용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가
        취해지고 있는지 알려드립니다.
      </p>

      <p>
        회사의 개인정보보호정책은 정부의 법률 및 지침 변경이나 회사의 내부방침
        변경 등으로 인하여 수시로 변경될 수 있고, 이에 따른 개인정보 보호정책의
        지속적인 개선을 위하여 필요한 절차를 정하고 있습니다. 이용자들께서는
        사이트 방문 시 수시로 확인하시기 바랍니다
      </p>

      <p>회사의 개인정보 보호정책은 다음과 같은 내용을 담고 있습니다.</p>

      <p className="flex flex-col gap-4">
        <span className="font-bold twenty">1. 개인정보 수집에 대한 동의</span>
        <span>
          {` 회사는 이용자들이 회사의 개인정보보호정책 및 이용약관의 내용에 대하여
          「동의함」 또는 「동의하지 않음」 버튼을 클릭할 수 있는 절차를
          마련하여, 「동의 함」 버튼을 클릭하면 개인정보 수집에 대해 동의한
          것으로 봅니다.`}
        </span>
      </p>
      <p className="flex flex-col gap-4">
        <span className="font-bold twenty">
          2. 개인정보의 수집목적 및 이용목적
        </span>
        <span>
          {` 개인정보라 함은 생존하는 개인에 관한 정보로서 당해 정보에 포함되어
          있는 성명, 이메일 등의 사항에 의하여 당해 개인을 식별할 수 있는
          정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와
          용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다. 대부분의 회사
          서비스는 별도의 사용자 등록이 없이 언제든지 사용할 수 있습니다. 그러나
          회사는 이용자에게 거래의 안전성/효율성 제고, 맞춤식 서비스 제공등 보다
          향상된 양질의 서비스를 제공하기 위하여 이용자 개인의 정보를 수집하고
          있습니다.`}
        </span>
      </p>
      <p>
        수집하는 개인정보 항목에 따른 구체적인 수집목적 및 이용목적은 다음과
        같습니다.
      </p>
      <ul className="list-disc list-outside pl-12 space-y-2">
        <li>
          이름, 아이디, 비밀번호 : 회원제 서비스 이용에 따른 본인 확인절차에
          이용
        </li>
        <li>
          이메일주소, 연락처(전화번호, 휴대전화번호) : 고지사항 전달 및
          본인의사확인, 불만처리, 사용자 구분 등 원활한 의사소통 경로의 확보
        </li>
        <li>
          주소 : 차량광고시 지역 검색 결과 노출에 이용 • 차량정보(차량번호,
          형식년도 등) : 차량 광고 시 판매 또는 구매자 정보 제공 • 판매자사진 :
          차량광고시 상세페이지 노출 • 사업자등록번호, 사업장주소 :
          세금계산서발행
        </li>

        <li>
          조합, 지역, 사원증번호, 단지명, 상사명, 상사전화번호, 상사주소 :
          딜러회원서비스 제공
        </li>
      </ul>
      <p className="flex flex-col gap-4">
        <span className="font-bold twenty">
          3. 수집하는 개인정보 항목 및 수집방법
        </span>
        <span>{`가. 수집하는 개인정보의 항목`}</span>
        <span>
          회사는 회원가입, 원활한 고객상담, 각종 서비스의 제공을 위해 아래와
          같은 개인정보를 수집하고 있습니다
        </span>
      </p>
      <AgreementFirst />
      <p>
        이벤트나 추가 회원정보 수집을 통해 이용자의 관심분야에 대한 세부화된
        항목의 정보는 수집될 수 있습니다.
      </p>
      <p>
        또한 서비스 이용과정이나 사업 처리 과정에서 아래와 같은 정보들이
        생성되어 수집될 수 있습니다.
      </p>
      <ul className="list-disc list-outside pl-12 space-y-2">
        <li>
          이용자의 브라우저 종류 및 OS, 검색어, 서비스 이용 기록 : 서비스이용에
          대한 통계분석
        </li>
        <li>
          IP Address, 방문 일시, 서비스 이용기록, 불량 이용 기록, 쿠키 :
          불법/부정이용 방지
        </li>
      </ul>
      <p>
        회사는 서비스 제공에 필요한 최소한의 개인정보만 수집하며, 이용자의
        기본적 인권을 침해할 우려가 있는 민감한 정보(인종, 종교, 사상, 출신지,
        본적지, 정치적 성향 및 범죄기록, 건강상태 등)는 수집하지 않습니다. 다만,
        이용자가 수집에 동의하시는 경우는 예외로 합니다.
      </p>
      <p>
        이용자는 개인정보의 수집/이용에 대한 동의를 거부할 수 있습니다. 다만, 이
        경우 서비스 이용 및 혜택 제공에 제한을 받을 수 있습니다. 또한, 회원가입
        시 필수 정보의 수집/이용 동의를 거부할 경우 서비스 제공에 제한이
        있습니다.
      </p>
      <p>나. 개인정보 수집방법</p>
      <p>회사는 다음과 같은 적법하고 공정한 방법으로 개인정보를 수집합니다.</p>
      <ul className="list-disc list-outside pl-12 space-y-2">
        <li>홈페이지</li>
        <li>상담게시판</li>
      </ul>
      <p className="flex flex-col gap-4">
        <span className="font-bold twenty">
          4. 수집하는 개인정보의 보유 및 이용기간
        </span>
      </p>
      <ol className="list-decimal list-outside space-y-2 pl-12">
        <li>
          이용자가 회사의 회원으로서 회사에 제공하는 서비스를 이용하는 동안
          회사는 이용자들의 개인정보를 계속적으로 보유하며 서비스 제공 등을 위해
          이용합니다.
        </li>
        <li>
          {`아래의 [6. 이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한
          사항]에서 설명한 절차와 방법에 따라 회원 본인이 직접 가입해지를 요청한
          경우에는 즉시 개인정보의 이용을 중지합니다. 다만, 회사 서비스의 원활한
          운영(탈퇴후 일정기간내 회원재가입 금지등) 및 이에 따른 분쟁을 해결하기
          위하여 요청일로부터 3년간 개인정보를 보관하며, 기간 만료후 즉시 재생할
          수 없는 방법에 의하여 디스크에서 완전히 삭제 추후 열람이나 이용이
          불가능한 상태로 처리됩니다.`}
        </li>
        <li>
          상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에
          의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간
          동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의
          목적으로만 이용하며 보존기간은 아래와 같습니다.
          <AgreementSecond />
        </li>
        <li>
          회사는 귀중한 회원의 개인정보를 안전하게 처리하며, 유출의 방지를
          위하여 다음과 같은 방법을 통하여 개인정보를 파기합니다.
        </li>
        <li>
          전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적
          방법을 사용하여 삭제합니다.
        </li>
      </ol>
      <p className="flex flex-col gap-4">
        <span className="font-bold twenty">
          5. 수집한 개인정보의 공유 및 제공
        </span>
        <span>
          {`회사는 이용자들의 개인정보를 "2. 개인정보의 수집목적 및 이용목적"에서
          고지한 범위내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를
          초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지
          않습니다. 다만, 아래의 경우에는 예외로 합니다.`}
        </span>
        <span>첫째, 이용자들이 사전에 공개에 동의한 경우</span>
        <span>
          둘째, 회사 서비스 이용약관이나 기타 회원서비스 이용약관을 위반한 경우
        </span>
        <span>
          셋째, 회사 서비스를 이용하여 타인에게 정신적-물리적 피해를 줌으로서
          그에 대한 법적인 조치를 취하기 위하여 개인정보를 공개해야 한다고
          판단되는 충분한 근거가 있는 경우
        </span>
        <span>
          넷째, 기타 법에 의해 요구된다고 선의로 판단되는 경우 (예를 들어
          관련법에 의거 적법한 절차에 의한 정부기관의 요청이 있는 경우 등)
        </span>
        <span>
          그리고 회사는 새로운 기술개발이나 보다 나은 서비스의 제공을 위하여
          이용자들의 개인정보를 공유할 수 있습니다. 이 경우에도 정보수집 또는
          정보제공 이전에 이용자들에게 개인정보를 공유할 기관이나 단체가
          누구인지, 어떤 정보가 필요한지, 그리고 언제까지 어떻게 보호되고
          관리되는지 알려드리고 동의를 구하는 절차를 거치게 되며, 이용자들의
          동의가 없는 경우에는 추가적인 정보를 임의로 수집하거나 공유하지
          않습니다.
        </span>
        <span>
          성별, 연령별 기타 특정 조건의 집단에 대한 광고 게재 및 발송시에도
          이용자들의 개인정보는 광고를 의뢰한 개인이나 기업등에 제공되지 않으며,
          기타 통계처리나 학술연구, 시장조사를 위하여 필요한 경우에도 특정한
          개인을 식별할 수 없는 형태로만 정보가 제공됩니다.
        </span>
        <span>
          이용자가 온라인상의 게시판 등을 통해 기재한 인적사항을 제3자가
          수집하는 경우가 있을 수 있으므로 이에 유의하시기 바랍니다. 이용자가
          스스로 게시판 등을 통해 기재한 인적사항과 관련하여 회사는 어떠한
          책임도 지지 않습니다.
        </span>
      </p>
      <p className="flex flex-col gap-4">
        <span className="font-bold twenty">
          {`6. 이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한 사항`}
        </span>
        <span>
          이용자는 언제든지 회사 웹사이트를 이용하여 등록되어 있는 자신의
          개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수 있습니다.
        </span>
        <span>
          {`이용자들의 개인정보 조회 및 수정을 위해서는 아이디와 비밀번호를
          사용하여 로그인(Log In)하면 되는데, 아이디(ID)를 제외한 모든
          입력사항을 수정할 수 있습니다. 또한 비밀번호를 잊어버린 경우에는 회원
          로그인 메뉴에서 "가입여부 및 ID확인" 버튼 및 "비밀번호확인"버튼을
          클릭하셔서 도움을 받으실 수 있습니다.`}
        </span>
        <span>
        {`가입해지는 회사 홈페이지에 있는 "회원탈퇴"를 클릭하신후 신청하시면,
          입력하신 사항을 기초로 이용자 본인여부를 확인후 처리합니다.`}
        </span>
        <span>
          이용자들은 회사 서비스의 아이디에 대하여 가입해지 또는 이용해지를 할
          수 있으나 이로 인하여 모든 서비스를 이용할 수 없게 되는 것은 아니며,
          단지 회원서비스등 로그인이 요구되는 일부 서비스에 대해서만 그 기능을
          이용할 수 없게 됩니다.
        </span>
      </p>
      <p className="flex flex-col gap-4">
        <span className="font-bold twenty">
          {`7. 개인정보관련 기술적-관리적 대책`}
        </span>
        <span>
          회사는 이용자들의 개인정보를 취급함에 있어 개인정보가 분실, 도난,
          누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은
          기술적 대책을 강구하고 있습니다.
        </span>
        <span>
          이용자들의 개인정보는 비밀번호에 의해 철저히 보호되고 있습니다. 회사
          회원 아이디의 비밀번호는 본인만이 알고 있으며, 개인정보의 확인 및
          변경도 비밀번호를 알고 있는 본인에 의해서만 가능합니다. 따라서 이용자
          여러분께서는 비밀번호를 누구에게도 알려주시면 안됩니다. 이를 위해
          회사에서는 기본적으로 PC에서의 사용을 마치신 후 온라인상에서
          로그아웃(Log Out)하시고 웹브라우저를 종료하도록 권장합니다. 특히 다른
          사람과 PC를 공유하여 사용하거나 공공장소(회사나 학교, 도서관, 인터넷
          게임방등)에서 이용한 경우에는 개인정보가 다른 사람에게 알려지는 것을
          막기 위해 같은 절차가 더욱 필요할 것입니다.
        </span>
        <span>
          회사는 해킹이나 컴퓨터 바이러스 등에 의해 회원의 개인정보가 유출되거나
          훼손되는 것을 막기 위해 최선을 다하고 있습니다. 개인정보의 훼손에
          대비해서 자료를 수시로 백업하고 있고, 최신 백신프로그램을 이용하여
          이용자들의 개인정보나 자료가 누출되거나 손상되지 않도록 방지하고
          있으며, 암호알고리즘 등을 통하여 네트워크상에서 개인정보를 안전하게
          전송할 수 있도록 하고 있습니다. 그리고 침입차단시스템을 이용하여
          외부로부터의 무단 접근을 통제하고 있으며, 기타 시스템적으로 안정성을
          확보하기 위한 가능한 모든 기술적 장치를 갖추려 노력하고 있습니다.
          회사의 개인정보관련 취급 직원은 담당자에 한정시키고 있고 담당자에 대한
          수시 교육을 통하여 회사 개인정보 보호정책의 준수를 항상 강조하고
          있습니다.
        </span>
      </p>
      <p className="flex flex-col gap-4">
        <span className="font-bold twenty">{`8. 개인정보의 위탁처리`}</span>
        <span>
          회사는 서비스 향상을 위해서 필요한 경우 및 기타 서비스 제공을 위해서
          이용자의 개인정보를 외부에 수집·보관·처리·이용·제공·관리·파기 등을 할
          수 있도록 아래와 같이 업무를 위탁하여 운영하고 있습니다. 회사는
          위탁계약 등을 통하여 서비스제공자의 개인정보보호 관련 지시엄수,
          개인정보에 관한 비밀유지, 제3자 제공의 금지 및 사고 시의 책임부담 등을
          명확히 규정하고 당해 계약 내용을 서면 또는 전자적으로 보관하여
          이용자의 권익을 보호하고 있습니다.
        </span>
      </p>
      <p className="flex flex-col gap-4">
        <span className="font-bold twenty">{`9. 개인정보관련 의견수렴 및 불만처리에 관한 사항`}</span>
        <span>
          {`회사는 개인정보보호와 관련하여 이용자 여러분들의 의견을 수렴하고 있으며 불만을 처리하기 위하여 모든 절차와 방법을 마련하고 있습니다. 이용자들은 하단에 명시한 "11. 개인정보 관리책임자 및 담당자의 소속-성명 및 연락처"항을 참고하여 전화나 메일을 통하여 불만사항을 신고할 수 있고, 회사는 이용자들의 신고사항에 대하여 신속하고도 충분한 답변을 해 드릴 것입니다. 또는 정부에서 설치하여 운영중인 개인정보침해신고센터(Http://www.cyberprivacy.or.kr)에 불만처리를 신청할 수 있습니다.`}
        </span>
      </p>
      <p className="flex flex-col gap-4">
        <span className="font-bold twenty">{`10. 어린이 정보보호에 관한 사항`}</span>
        <span>
          현행법상 만14세 미만의 어린이들은 온라인으로 타인에게 개인정보를
          보내기 전에 반드시 개인정보의 수집 및 이용목적에 대하여 충분히
          숙지하고 법정대리인의 동의를 받아야 합니다. 이에 회사는 가입약관이나
          서비스 이용규칙등을 통하여 위 사항을 설명하고 있으며 가입시에는 반드시
          부모님 동의를 받았는지의 여부를 확인합니다. 만14세 미만 어린이의
          법정대리인은 어린이의 개인정보 열람, 정정, 동의철회를 요청할 수
          있으며, 이러한 요청이 있을 경우 회사는 지체없이 필요한 조치를
          취합니다.
        </span>
      </p>
      <p className="flex flex-col gap-4">
        <span className="font-bold twenty">{`11. 쿠키에 의한 개인정보 수집`}</span>
        <span>
          {`회사는 고객님의 정보를 수시로 저장하고 찾아내는 '쿠키 (cookie)' 등
          개인정보를 자동으로 수집하는 장치를 설치·운영합니다. 쿠키는 회사가
          웹사이트를 운영하는 데 이용되는 서버가 고객님의 브라우저에 보내는 아주
          작은 텍스트 파일로서 고객님의 컴퓨터 하드디스크에 저장됩니다. 회사는
          다음과 같은 목적을 위해 쿠키 등을 사용합니다.`}
        </span>
      </p>
      <ul className="list-disc list-outside pl-12 space-y-2">
        <li>
          {`[쿠키 등 사용 목적] - 홈페이지 접속 빈도나 방문 시간, 이용형태를
            파악하여 이용자에게 최적화된 정보를 제공하기 위해 사용합니다.`}
        </li>
        <li>{`[쿠키 설정 거부 방법] - 고객님은 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 고객님은 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.`}</li>
        <li>{`[설정방법 예(인터넷 익스플로러의 경우)] - 웹브라우저 상단의 도구 > 인터넷 옵션 > 개인정보`}</li>
        <li>{`단, 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수도 있습니다.`}</li>
      </ul>
      <p className="flex flex-col gap-4">
        <span className="font-bold twenty">{`12. 개인정보 관리책임자 및 담당자의 소속-성명 및 연락처`}</span>
        <span>
          {`이용자 개인정보와 관련한 아이디의 비밀번호에 대한 보안유지책임은 해당
          이용자 자신에게 있습니다. 회사에서는 비밀번호에 대해 어떠한 방법으로도
          이용자에게 직접적으로 질문하는 경우는 없으므로 타인에게 비밀번호가
          유출되지 않도록 각별히 주의하시기 바랍니다 특히 "7. 개인정보관련
          기술적-관리적 대책"에서 명시한 것과 같이 공공장소에서 온라인상에서
          접속해 있을 경우에는 더욱 유의하셔야 합니다. 회사는 개인정보에 대한
          의견수렴 및 불만처리를 담당하는 개인정보 관리책임자 및 담당자를
          지정하고 있고, 연락처는 아래와 같습니다.`}
        </span>
      </p>
    </main>
  );
};

export default PrivacyPage;
