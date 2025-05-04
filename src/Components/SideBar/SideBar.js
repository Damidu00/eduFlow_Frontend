import React from 'react';
import { BookOpen, MessageSquare, TrendingUp, Zap, LogOut } from 'lucide-react';
import styles from './SideBar.module.css';
import NavBar from '../NavBar/NavBar';

function SideBar() {
    const currentPath = window.location.pathname;

    const handleSignOut = () => {
        localStorage.removeItem('userID');
        localStorage.removeItem('userType');
        window.location.href = '/';
    };


    return (
        <div className={styles.sideBarContainerNav}>
            <div className={styles.sideBarNavbarWrapper}>
                <NavBar />
            </div>
            <div className={styles.sideBarNav}>
                <div className={styles.sideBarNavItems}>
                    <div 
                        className={`${styles.sideBarNavItem} ${currentPath === '/allPost' ? styles.sideBarNavItemActive : ''}`}
                        onClick={() => (window.location.href = '/allPost')}
                    >
                        <MessageSquare size={20} className={styles.sideBarNavIcon} />
                        <span>EduPost</span>
                    </div>
                    <div 
                        className={`${styles.sideBarNavItem} ${currentPath === '/learningSystem/allLearningPost' ? styles.sideBarNavItemActive : ''}`}
                        onClick={() => (window.location.href = '/learningSystem/allLearningPost')}
                    >
                        <BookOpen size={20} className={styles.sideBarNavIcon} />
                        <span>LearnResources</span>
                    </div>
                    
                    <div 
                        className={`${styles.sideBarNavItem} ${currentPath === '/allLearningProgress' ? styles.sideBarNavItemActive : ''}`}
                        onClick={() => (window.location.href = '/allLearningProgress')}
                    >
                        <TrendingUp size={20} className={styles.sideBarNavIcon} />
                        <span>EduProgress 🚀 </span>
                    </div>

                    <div className={styles.sideBarDivider}></div>

                    <div 
                        className={styles.sideBarSignOut}
                        onClick={handleSignOut}
                    >
                        <LogOut size={20} className={styles.sideBarNavIcon} />
                        <span>Sign Out</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;