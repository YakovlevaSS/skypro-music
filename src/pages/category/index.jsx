import * as S from './styles';
import { categoryArr } from '../../utilits/categoryes';
import { useParams } from 'react-router-dom';

export const Category = () => {
  const params = useParams();

  const category = categoryArr.find((category) => category.id === Number(params.id));

  return (
    <S.CategoryBlock>
      <h1>CategoryPage {category.id}</h1>
      <img src={category.img} alt={category.alt} />
    </S.CategoryBlock>
  )
}