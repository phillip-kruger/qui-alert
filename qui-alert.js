import { LitElement, html, css} from 'lit';

import '@qomponent/qui-icons';

/**
 * Alert UI Component based on Lit that looks like the Bootstrap Alert
 */
export class QuiAlert extends LitElement {

    static styles = css`
        .alert {
            padding: 1rem 1rem;
            margin: 1rem;
            border: 1px solid transparent;
            border-radius: 0.375rem;
            position: relative;
            display: flex;
            justify-content: space-between;
        }
        .info {
            background-color: var(--lumo-primary-color-10pct, hsla(214, 100%, 60%, 0.13));
            color: var(--lumo-primary-text-color, hsla(211, 63%, 54%, 1.0));
        }
        .success {
            background-color: var(--lumo-success-color-10pct, hsla(145, 72%, 31%, 0.1));
            color: var(--lumo-success-text-color, hsla(145, 85%, 25%, 1.0));
        }
        .warning {
            background-color: var(--lumo-warning-color-10pct, hsla(30, 100%, 50%, 0.1));
            color: var(--lumo-warning-text-color, hsla(30, 89%, 42%, 1.0));
        }  
        .error {
            background-color: var(--lumo-error-color-10pct,hsla(3, 85%, 49%, 0.1));
            color: var(--lumo-error-text-color, hsla(3, 89%, 42%, 1.0));
        }
        .infoprimary {
            background-color: var(--lumo-primary-color, hsla(211, 63%, 54%, 1.0));
            color: var(--lumo-primary-contrast-color, hsla(0, 100%, 100%, 1.0));
        }
        .successprimary {
            background-color: var(--lumo-success-color, hsla(145, 72%, 30%, 1.0));
            color: var(--lumo-success-contrast-color, hsla(0, 100%, 100%, 1.0));
        }
        .warningprimary {
            background-color: var(--lumo-warning-color, hsla(30, 100%, 50%, 1.0));
            color: var(--lumo-warning-contrast-color, hsla(0, 100%, 100%, 1.0));
        }  
        .errorprimary {
            background-color: var(--lumo-error-color, hsla(3, 85%, 48%, 1.0));
            color: var(--lumo-error-contrast-color, hsla(0, 100%, 100%, 1.0));
        }
        .layout {
            display: flex;
            flex-direction: column;
            width: 100%;
        }
       .content {
            display: flex;
            gap: 10px;
            align-items: center;
            width: 100%;
        }
        .center {
            justify-content: center;
        }
        .close {
            cursor: pointer;
        }
        .title {
            font-size: 1.4em;
            padding-bottom: 10px;
        }
    `;

    static properties = {
        // Tag attributes
        title: {type: String}, // Optional title
        level: {type: String}, // Level (info, success, warning, error) - default info
        icon: {type: String}, // Icon
        size: {type: String}, // Font size - default large
        showIcon: {type: Boolean}, // Use default icon if none is supplied - default false
        permanent: {type: Boolean}, // disallow dismissing - default false
        primary: {type: Boolean}, // Primary - default false
        center: {type: Boolean}, // Center - default false
        // Internal state
        _dismissed: {type: Boolean, state: true}
    };

    constructor() {
        super();
        this.title = null;
        this.level = "info";
        this.icon = null;
        this.size = "large";
        this.showIcon = false;
        this.permanent = false;
        this.primary = false;
        this.center = false;
        this._dismissed - false;
    }

    render() {
        if (!this._dismissed) {
            let theme = this.level;    
            if(this.primary){
                theme = theme + "primary";
            }
            
            let contentClass="content";
            if(this.center){
                contentClass = contentClass + " center";
            }
            return html`
                <div class="alert ${theme}" style="font-size:${this.size};" role="alert">
                    <div class="layout">
                        ${this._renderTitle()}
                        <div class="${contentClass}">
                            ${this._renderIcon()}    
                            <slot></slot>
                        </div>
                    </div>
                    ${this._renderClose()}
                </div>`;
        }
    }

    _renderIcon(){
        if(this.icon){
            return html`<fas-icon size="${this.size}" icon="${this.icon}"></fas-icon>`;
        }else if (this.showIcon){
            // Default icon
            if(this.level === "info"){
                return html`<fas-icon size="${this.size}" icon="circle-info"></fas-icon>`;
            }else if(this.level === "success"){
                return html`<fas-icon size="${this.size}" icon="circle-check"></fas-icon>`;
            }else if(this.level === "warning"){
                return html`<fas-icon size="${this.size}" icon="triangle-exclamation"></fas-icon>`;
            }else if(this.level === "error"){
                return html`<fas-icon size="${this.size}" icon="circle-exclamation"></fas-icon>`;
            }
        }
    }

    _renderTitle(){
        if(this.title){
            return html`<div class="title">${this.title}</div>`;
        }
    }

    _renderClose(){
        if (!this.permanent) {
            return html`<fas-icon class="close" icon="xmark" @click="${this._dismiss}"></fas-icon>`;
        }
    }

    _dismiss() {
        this._dismissed = true;
    }
}

customElements.define('qui-alert', QuiAlert);