function getPromise(method, url){
    return new Promise(function(resolve,reject){
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(this.readyState === 4){
                if(this.status == 200){
                    try{
                        let response = JSON.parse(xhr.responseText);
                        windowObjectWrap.NewEvaluationPage = function(options) {
                            this.render = `
                            ${windowObjectWrap.NAV()}
                            <section class="form-candidate">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <form action="" class="user-input" id='form-new' method='post'>
                                                ${Inputs(
                                                    response.inputPlaceholder
                                                )}
                                                ${TechnicalLevelPicker(
                                                    response.technicalData
                                                )}
                                                ${TextArea(
                                                    response.textarea
                                                )}
                                                ${SelectOption(
                                                    response.fieldset
                                                )}
                                                <div class="button-wrap">
                                                    <input type="button" id='btn' class='submit-button' value='Submit'>
                                                </div>
                                                
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            ${windowObjectWrap.Footer()}
                            `
                            ;
                        }
                        
                        
                        const TableData = function (options = {}) {
                            const currentLevel = options.headers.map((el) => `
                                    <td class='technical-level-td'>${el}</td>
                                `).join('');
                            return currentLevel;
                        };
                        
                        const TableCheckbox = function (options = {}) {
                            const checkboxArr = [];
                            options.columnData.forEach((d) => {
                                checkboxArr.push(`
                                    <td>
                                        ${d.inputLevels.map((j) => `
                                            <input class='input-checkbox' type="radio" name='radio' value='${j}'>
                                        `).join('')}
                                    </td>
                                `);
                            });
                            return checkboxArr.join('');
                        };
                        
                        
                        const TechnicalLevelPicker = function (options = {}) {
                            return `
                            <h4 class='technical-header'>${options.title}</h4>
                            <table class='technical-level-table'>
                                <tbody class='tbody-new'>
                                    <tr class='technical-level'>
                                        ${TableData({ headers: options.headers })}
                                    </tr>
                                    <tr class="technical-level-category">
                                        ${TableCheckbox({ columnData: options.columnData })}
                                    </tr>
                                </tbody>
                            </table>
                            `;
                        };
                        
                        const TextareaElements = function (options = {}) {
                            const textareaArr = [];
                            options.textarea.forEach((d) => {
                                textareaArr.push(`
                                    <div class="textarea-wrap">
                                    <h4 class='textarea-header'>${d.label}</h4>
                                    <textarea class='textarea' name="${d.id}" id="${d.id}" rows="10" placeholder="${d.placeholder}"></textarea>
                                    <div>
                                `);
                            });
                            return textareaArr.join('');
                        };
                        
                        const TextArea = function (options = {}) {
                            return `
                                ${TextareaElements({ textarea: options.text })}
                                `;
                        };
                        
                        
                        const Option = function (options = {}) {
                            return `
                            <option value="${options}">${options}</option>
                            `;
                        };
                        
                        const Select = function (options = {}) {
                            return `
                            
                            <div class="column-30 margin-right">
                            <span class='description'>${options.span}</span>
                            <select name="${options.name}" class="select">
                                ${options.optionValue.map((g) => Option(g)).join('')}
                            </select>
                            </div>
                            
                            `;
                        };
                        
                        const TechnicalAreaPicker = function (options = {}) {
                            const fieldsets = options.fieldsetObj.map((n) => `
                                <fieldset class='fieldset'>
                                    <legend class='legend'>${n.fieldsetName}</legend>
                                        ${n.items.map((o)=>{
                                            return Select(o);
                                        }).join('')}
                                    <div class="fieldset-wrap"></div>
                                </fieldset>`);
                            return fieldsets.join('');
                        };
                        
                        const InputFunction = function(options = {}){
                            const input = options.inputs.map((d) => {
                                return `
                                    <input class='${d.class}' id='${d.id}' type="${d.type}" name='${d.name}' placeholder="${d.placeholder}">
                                    `
                            })
                            return input.join('');
                        }
                        
                        const Inputs = function(options = {}){
                            return `
                            <div class="field-ev">
                                ${InputFunction({inputs: options.media})}
                            </div>
                            `
                        }
                        
                        const SelectOption = function (options = {}) {
                            return `
                                ${TechnicalAreaPicker({ fieldsetObj: options.data })}
                            `;
                        };
                    }catch(e){
                        console.error('Fatal error', e);
                        reject('Rejected');
                    }
                }
            }
        } //end of xhr
        xhr.open(method,url);
        xhr.send();
    }); //end of promise
}
getPromise('GET','../../data/xhrData.json')
.then(function(what){
    console.log(what);
})
.catch(function(err){
    console.error('Errorhorror', err.statusText);
});







© 2017 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About