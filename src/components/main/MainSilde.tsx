import { Link } from 'react-router-dom'
import MoivePoster from "../../asset/image/poster.jpg";

export default function MainSilde() {
  return (
    <Link
        to={`/movie/view/`}
        className="block bg-point-color relative overflow-hidden rounded-2xl h-[250px] xl:h-[560px] md:h-[360px] md:rounded-[20px]"
    >
        <div className="absolute left-0 top-0 object-cover w-full h-full after:content-[''] after:block after:absolute after:left-0 after:top-0 after:bg-black after:z-10 after:w-full after:h-full after:opacity-30">
            <img 
                className="absolute left-0 top-0 object-cover w-full h-full "
                src={MoivePoster}
                alt="포스터"
            />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 z-10 text-white px-5 md:pl-16">
            <h4 className="text-xl md:text-2xl xl:text-4xl font-bold ">
                주간 박스오피스
            </h4>
            <dl className="mt-2 md:mt-3">
                <dt className="text-base md:text-lg xl:text-2xl">[영화제목]</dt>
                <dd className="text-xs md:text-sm opacity-70 mt-2 md:mt-3 ">개봉일 - [0000.00.00]</dd>
            </dl>
        </div>
    </Link>
  )
}