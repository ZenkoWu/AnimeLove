import { Menu } from "@mui/material";
import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { useWindowSizes } from "../useWindowSizes/useWindowSizes";

export const BurgerMenu = ({menuConfig}: {
    menuConfig: { 
        route: string,
        title: string,
        key: number
    }[]
}) => {
    
    const [anchor, setAnchor] = useState<Element | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const closeMenu = useCallback(
        () => { 
            setIsOpen(false) 
        }, [setIsOpen]
    );
    useWindowSizes(closeMenu);

    const openMenu = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            setAnchor(e.currentTarget)
            setIsOpen(prev => !prev) 
    }, [anchor, isOpen])

    return (    
        <nav className="navbar p-0 navbar-expand-lg navbar-dark">
            <button
                className="navbar-toggler button"
                aria-controls="simple-menu" aria-haspopup="true"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navmenu"
                onClick={openMenu}
            >
                <span className="navbar-toggler-icon btn text-secondary"/>
            </button>
        
            <Menu
                style={{marginTop: "5px"}}
                id="simple-menu"
                anchorEl={anchor}
                open={isOpen}
                MenuListProps={{
                    className: "  navbarMenu  p-0"
                }}
                onClose={closeMenu}
            > 
                <div className="bg-white p-0 m-0">
                    {
                        menuConfig
                        .map(({title, key, route}) => (
                            <NavLink 
                                to={route} 
                                key={key} 
                                className={
                                    link => link.isActive ? ' fw-bold ' : ' text-secondary '
                                }
                            > 
                                  
                                <div className='p-3 px-5 fs-5'>
                                    {title}
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
            </Menu>
        </nav>    
    )
}
