import React from 'react'
import { Link } from 'react-router-dom'

export default function Paginate({ paginate = {}, renderLink }) {
    function renderItem() {
        let list = [];

        let { currentPage, totalPage, nextPage, prePage } = paginate;

        if (currentPage !== 1) {
            let e = renderLink(currentPage - 1);
            list.push(<li><Link className="prev" to={e}><span className="fa fa-angle-left" /></Link></li>)
        }

        let limitPrev = currentPage - 1 > 0 ? currentPage - 1 : 1;
        let limitNext = currentPage + 1 < totalPage ? currentPage + 1 : totalPage;


        if(currentPage === 3){
            list.push(<li><Link className="page-numbers" to={renderLink(1)}>1</Link></li>)
        }else if (currentPage >= 4) {
            list.push(<li><Link className="page-numbers" to={renderLink(1)}>1</Link></li>)
            list.push(<li><span>...</span></li>)
        }



        for (let i = limitPrev; i <= limitNext; i++) {
            let e = renderLink(i);
            if (i === paginate.currentPage) {
                list.push(<li><span className="page-numbers current" >{i}</span></li>)
            } else {
                list.push(<li><Link className="page-numbers" to={e}>{i}</Link></li>)
            }
        }


        if(currentPage === totalPage - 3){
            list.push(<li><Link className="page-numbers" to={renderLink(totalPage - 2)}>{totalPage - 2}</Link></li>)
            list.push(<li><Link className="page-numbers" to={renderLink(totalPage - 1)}>{totalPage - 1}</Link></li>)
            list.push(<li><Link className="page-numbers" to={renderLink(totalPage)}>{totalPage}</Link></li>)
        }else if (currentPage <= totalPage - 4) {
            list.push(<li><span>...</span></li>)
            list.push(<li><Link className="page-numbers" to={renderLink(totalPage)}>{totalPage}</Link></li>)
        }

         if (currentPage < totalPage) {
            
            list.push(<li><Link className="prev" to={renderLink(currentPage + 1)}><span className="fa fa-angle-right" /></Link></li>)
        }

        return list;
    }

    return (
        <div className="pagination-wrapper mt-5">
            <ul className="page-pagination">
                {/* <li><span aria-current="page" className="page-numbers current">1</span></li>
                <li><a className="page-numbers" href="#url">2</a></li>
                <li><a className="page-numbers" href="#url">3</a></li>
                <li><a className="page-numbers" href="#url">4</a></li>
                <li><a className="page-numbers" href="#url">....</a></li>
                <li><a className="page-numbers" href="#url">15</a></li>
                <li><a className="next" href="#url"><span className="fa fa-angle-right" /></a></li> */}
                {renderItem()}
            </ul>
        </div>
    )
}
