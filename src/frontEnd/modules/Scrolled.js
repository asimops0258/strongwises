import { useEffect } from "react";
import "./Scrolled.scss";

const Scrolled = ({children})=>{
    const listenScroll = () => {
        const rows = document.querySelectorAll(".scrolled-container .scrolled-item")
        const html = document.documentElement
        document.addEventListener('scroll', (e) => {
            //將滑動的高度scale 0 - 1
            let scrolled = html.scrollTop / (html.scrollHeight - html.clientHeight)

            //計算一個元素的所佔的高度比例
            let total = 1 / rows.length


            for (let [index, row] of rows.entries()) {

                //計算出元素相對的比例起始與結束位置
                let start = total * index
                let end = total * (index + 1)

                //進程會等於 (滑動的比例 - 元素起始位置) / 元素佔比
                let progress = (scrolled - start) / ((end - start))
                if (progress >= 1) {
                    progress = 1
                }

                if (progress <= 0) progress = 0
                row.style.setProperty('--progressOpacity', progress)

            }
        })
    }

    useEffect(() => {
        listenScroll();
    }, [])

    return (
        <div className="scrolled-container">
            {children}
        </div>
    )
}

export default Scrolled;