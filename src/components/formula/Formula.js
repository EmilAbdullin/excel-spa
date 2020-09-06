import { ExcelComponent } from '@core/ExcelComponent'
export class Formula extends ExcelComponent{
    static className = 'excel__formula'

    constructor($root) {
        super($root,{
            name: 'Formula',
            listeners: ['input','click']
        })
    }

    toHTML() {
        return `
            <div class="info">fx</div>
            <div class="input" spellcheck="false" contenteditable="true"></div>
        `
    }

    onInput(event){
        console.log('OnINPUT FORMULA', event.target.textContent.trim())
    }

    onClick(event){
        console.log('OnClick FORMULA')
    }



}