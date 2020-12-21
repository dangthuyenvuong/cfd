import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function Paginate({ paginate = {}, renderLink }) {
    function renderItem() {
        let list = [];

        let { currentPage, totalPage, nextPage, prePage } = paginate;

        if (currentPage !== 1) {
            list.push(<li><a className="prev" to={currentPage - 1}><span className="fa fa-angle-left" /></a></li>)
        }

        let limitPrev = currentPage - 1 > 0 ? currentPage - 1 : 1;
        let limitNext = currentPage + 1 < totalPage ? currentPage + 1 : totalPage;


        if(currentPage === 3){
            list.push(<li><a onClick={_clickLink} className="page-numbers" to={1}>1</a></li>)
        }else if (currentPage >= 4) {
            list.push(<li><a onClick={_clickLink} className="page-numbers" to={1}>1</a></li>)
            list.push(<li><span>...</span></li>)
        }



        for (let i = limitPrev; i <= limitNext; i++) {
            if (i === paginate.currentPage) {
                list.push(<li><span className="page-numbers current" >{i}</span></li>)
            } else {
                list.push(<li><a onClick={_clickLink} className="page-numbers" to={i}>{i}</a></li>)
            }
        }


        if(currentPage === totalPage - 3){
            list.push(<li><a onClick={_clickLink} className="page-numbers" to={totalPage - 2}>{totalPage - 2}</a></li>)
            list.push(<li><a onClick={_clickLink} className="page-numbers" to={totalPage - 1}>{totalPage - 1}</a></li>)
            list.push(<li><a onClick={_clickLink} className="page-numbers" to={totalPage}>{totalPage}</a></li>)
        }else if (currentPage <= totalPage - 4) {
            list.push(<li><span>...</span></li>)
            list.push(<li><a onClick={_clickLink} className="page-numbers" to={totalPage}>{totalPage}</a></li>)
        }

         if (currentPage < totalPage) {
            
            list.push(<li><a onClick={_clickLink} className="prev" to={currentPage + 1}><span className="fa fa-angle-right" /></a></li>)
        }

        return list;
    }
    const history = useHistory()
    function _clickLink(e){
        e.preventDefault();
        history.push({
            pathname: window.location.pathname,
            search: '?page=' + e.target.getAttribute('to')
        })
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
