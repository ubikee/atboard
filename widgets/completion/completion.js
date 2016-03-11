widget = {
    //runs when we receive data from the job
    onData: function (el, data) {

        //The parameters our job passed through are in the data object
        //el is our widget element, so our actions should all be relative to that
        if (data.title) {
            $('h2', el).text(data.title);
        }
        document.querySelector('ubik-gauge').value = data.value
    }
};