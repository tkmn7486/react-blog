import { Link, To, useLocation, useParams } from "react-router-dom"
import style from "./style.module.scss"

import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"


type menu = {
    label:string,
    path: To
}

export const Header = () => {
    const location = useLocation();
    const params = location.pathname;

    console.log("param:", params)

    const siteMenu:menu[] = [
        {label: "全記事", path: "/articles/all"},
        {label: "ゲーム", path: "/articles/game"},
        {label: "映像作品", path: "/articles/movie"},
        {label: "書籍", path: "/articles/book"},
        {label: "技術", path: "/articles/tech"},
    ]
    
    return (
        <div className={style.header}>
            <Link to="/">
                <h1 className={style["site-name"]}>T5倉庫</h1>
            </Link>
            <div className={style["site-menu-container"]}>
            { siteMenu.map( (menu, index) =>
                <div className={params===menu.path ? style["active-site-menu"] : style["site-menu"]} key={index}>
                    <Link to={menu.path}>
                        <Label className={style["menu-link"]}>
                            {menu.label}
                        </Label>
                    </Link>
                    { siteMenu.length-1 !== index &&
                        <div className={style.separator}>|</div>
                    }
                </div>
            )}
            </div>
            <Separator />
        </div>
    )
}