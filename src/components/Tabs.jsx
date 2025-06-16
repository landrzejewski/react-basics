function Tabs({children, tabs, tabsContainer = 'menu'}) {
    const TabsContainer = tabsContainer;
    return (
        <>
            <TabsContainer>{tabs}</TabsContainer>
            {children}
        </>
    );
}

export default Tabs;