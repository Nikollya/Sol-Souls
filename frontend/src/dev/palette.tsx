import React from 'react';
import {
    Category,
    Component,
    Variant,
    Palette,
} from '@react-buddy/ide-toolbox';
import {Link} from "react-router-dom";

export const PaletteTree = () => (
    <Palette>
        <Category name="HTML">
            <Component name="a">
                <Variant requiredParams={['href']}>
                    <a>Link</a>
                </Variant>
            </Component>
            <Component name="button">
                <Variant>
                    <button>Button</button>
                </Variant>
            </Component>
            <Component name="Link">
                <Variant>
                    <Link to="/"></Link>
                </Variant>
            </Component>

        </Category>
    </Palette>
);
