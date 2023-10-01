import * as S from './styles';

function NotFoundContent() {
    return (
  <S.NotFoundBloc>
    <S.ProblemBig>404</S.ProblemBig>
    <S.Problem>
      <S.ProblemDis>Страница не найдена</S.ProblemDis>
      <S.ProblemImg src="./../img/icon/crying.svg" alt="crying smile" />
    </S.Problem>
    <S.GoToMainButton>
          <S.GoToMainButtonLink href="">Вернуться на главную</S.GoToMainButtonLink>
        </S.GoToMainButton>
  </S.NotFoundBloc>
    )
  }

  export default NotFoundContent;
  