function Select2AjaxLoader(parent,child,url,failErrorMessage,valueMember,displayMember,showAllOption = false)
{
    let className = [...Array(30)].map(() => Math.random().toString(36)[2]).join('');
    $(child).before('<div class='+className+'></div>');
    let loadingIcon = $("."+className);
    $(loadingIcon).css({
        'display':'none',
        'width': '15px',
        'position': 'relative',
        'height': '15px',
        'margin-top': '-15px',
        'left': 'calc(100% - 3em)',
        'top': '1.8em',
        'z-index': '999999999',
        'border': '2px solid rgb(0 0 0 / 40%)',
        'border-radius': '50%',
        'border-top-color': '#fff',
        'animation': 'spin .5s linear infinite',
        '-webkit-animation': 'spin .5s linear infinite'
    });

    $(parent).on("change", function (e) {
        $.ajax({
            url: url + $(parent).val(),
            dataType: 'json',
            type: 'GET',
            beforeSend: function ()
            {
                $(loadingIcon).css({'display':'block'});
            },
            success: function (response) {
                $(child).empty();
                if(showAllOption === true)
                {
                    $(child).append('<option value="0">ALL</option>');
                }
                $.each(response.data, function (i, item) {
                    let valueHolder = valueMember || "Id";
                    let displayHolder = displayMember || "Name";
                    $(child).append(new Option(item[displayHolder],item[valueHolder],false,false));
                });
                $(child).change();
                $(loadingIcon).css({'display':'none'});
            },
            error: function (e) {
                notifyError(failErrorMessage || e.message);
                $(loadingIcon).css({'display':'none'});
            }

        });
    });
    $(parent).change();
}
