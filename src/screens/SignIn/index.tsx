import { RFValue } from "react-native-responsive-fontsize";
import { GoogleIcon, AppleIcon, GoFinanceIcon } from "../../assets";

import * as S from "./styles";
import { SignInSocialButton } from "../../components/SignInSocialButton";

export function SignIn() {
  return (
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <GoFinanceIcon width={RFValue(120)} height={RFValue(68)} />
          <S.Title>Controle suas finanças de forma muito simples</S.Title>

          <S.SignInTitle>
            Faça seu login com uma das contas abaixo
          </S.SignInTitle>
        </S.TitleWrapper>
      </S.Header>
      <S.Footer>
        <S.FooterContent>
          <SignInSocialButton icon={GoogleIcon} title="Entrar com Google" />
          <SignInSocialButton icon={AppleIcon} title="Entrar com Apple" />
        </S.FooterContent>
      </S.Footer>
    </S.Container>
  );
}
