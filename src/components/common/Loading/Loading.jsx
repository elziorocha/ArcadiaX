import { carregamento } from "../../../utils/imagens";

const Loading = () => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <img src = { carregamento } alt = "carregamento" />
    </div>
  )
}

export default Loading;
