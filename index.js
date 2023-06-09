function shadowProvider(options){
    let images = document.querySelectorAll('.shadowProvider');

    if(options.shadow_type === 'hard')
    options.shadow_type = '0px'
    else
    options.shadow_type = '15px'

    images.forEach(image=>{
        image.getElementsByClassName.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0,12)`;
        if(options.padding){
            image.getElementsByClassName.padding = '1em';
        }
    })
}
module.exports.shadowProvider = shadowProvider;