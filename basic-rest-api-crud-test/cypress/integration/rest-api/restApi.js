describe('http exapmle', function(){

    it('GET', function(){
        cy.request({
            method:'GET',
            url: 'https://httpbin.org/get',
        }).then(function(response){
            expect(response.body).have.property('url')
        })
    });

    it('POST', function(){
        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            body: {
                "name": "Julhas",
                "age": 27,
            },
            headers: {
                "content-type": "application/json"
            }
        })
    })


});