//@flow
import React, {type ComponentType} from 'react';

import type {ScriptComponentProps, I18nType, ScriptCallbackType} from './types';

import {LoadingSpinner} from '../ak/LoadingSpinner';
import {InfoMessage} from '../ak/messages';

import type {ItemType} from '../redux';


type Props<T> = {
    i18n: I18nType,
    isReady: boolean,
    items: Array<T>,
    onEdit: ScriptCallbackType,
    ScriptComponent: ComponentType<ScriptComponentProps<T>>
};

export class ScriptList<T> extends React.PureComponent<Props<T&ItemType>> {
    render() {
        const {isReady, items, i18n, onEdit, ScriptComponent} = this.props;

        if (!isReady) {
            return <LoadingSpinner/>;
        }

        return (
            <div className="ScriptList page-content">
                {items.length ?
                    items.map(item =>
                        <ScriptComponent key={item.id} script={item} onEdit={onEdit}/>
                    ) :
                    <InfoMessage title={i18n.noItems}/>
                }
            </div>
        );
    }
}
