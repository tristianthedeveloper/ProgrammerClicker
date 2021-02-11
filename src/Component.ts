interface Component {


    /**
     * Called whenever the document loads.
     */
    render(): void;

    /**
     *  Stops rendering the given component, and returns its name.
     */
    unrender() : string;

    /**
     * name of this component, will be used in a component list.
     */
    readonly name: string;

    /**
     * Whether or not this component is loaded.
     */
    isLoaded: boolean;

    /**
     * Unload this component, will return true if successful, false if there was an error.
     */
    unload(): boolean;


}

class ComponentManager {

    loadedComponents: Component[] = [];



    /**
     * Loads the given component, and adds it to the loaded component array.
     * @param component Component to add to the loaded components list.
     */
    loadComponent(component: Component) {
        this.loadedComponents.push(component);
    }

    /**
     * Renders the given component.
     * @param component The component to render
     */
    renderComponent(component: Component) {

        if (-1 === this.loadedComponents.indexOf(component))
            throw new Error(`Component ${component.name} is not loaded. Please load it before rendering.`);
        component.render();
    }
    /**
     * Unloads and un-renders the given component.
     * @param what The component to unload
     */
    unloadComponent(what: Component) {

        


    }
}

export type {
    Component
}