import { Link } from "react-router-dom";
import MoivePoster from "../../asset/image/poster.jpg";

export default function MovieCard() {
  return (
    <Link to={`/movie/view/1`} className="group">
        <div
            className={`w-full bg-cyan-50 relative overflow-hidden pb-[calc(470/329*100%)] after:pb-2.5 after:content-[''] after:block`}
        >
            <img 
                className="absolute left-0 top-0 w-full h-full object-cover transition-transform group-hover:scale-110 "
                src={MoivePoster}
                alt="영화 포스터" 
            />
        </div>
        <div className="mt-3">

            <div>"NEW"</div>
            <p className="text-xs text-point-color">순위</p>

            <dl>
                <dt className="text-base font-semibold break-keep">123</dt>
                <dd className="text-sm mt-1 text-neutral-500">개봉일 : 0</dd>
            </dl>
            <p className="text-xs mt-1 text-neutral-500">누적 관객수 - 0 명</p>
            
        </div>
    </Link>
  )
}
