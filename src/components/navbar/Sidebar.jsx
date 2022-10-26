import { 
    SidebarContainer,
    Icon,

    SidebarWrapper,
    SidebarLink,
    SidebarMenu } from './NavbarAndSidebarElements';

    import { CloseIcon } from './Icons'

const Sidebar = ( {isOpen, toggle} ) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/shop'>
                        Shop
                    </SidebarLink>
                    <SidebarLink to='/sobre-nosotros'>
                        Sobre Nosotros
                    </SidebarLink>
                    <SidebarLink to='/contacto'>
                        Contacto
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
}   

export default Sidebar;