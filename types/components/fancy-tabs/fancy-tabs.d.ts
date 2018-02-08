export declare class FancyTabs {
    tabs: any;
    panels: any;
    el: HTMLElement;
    selected: any;
    protected onSelectedChange(index: string): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    findFirstSelectedTab: () => any;
    selectTab: (idx?: any) => void;
    tabTitleClick: (e: any) => void;
    tabKeyDown: (e: any) => void;
    render(): JSX.Element;
}
