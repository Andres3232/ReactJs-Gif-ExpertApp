

import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas con GifGridItem()', () => {

    const title = 'Titulo'
    const url = 'https://urlmock'
    const wrapper = shallow( <GifGridItem title={title} url={url}/>)
    
    test('debe mostrar <GifGridItem/> correctamente', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('debe de tener un parrafo con el tittle', () => {
        const p =wrapper.find('p');
        expect ( p.text().trim() ).toBe( title )
    })

    test('debe de tener la imagen igual al url y alt de las props', () => {
        
        const img = wrapper.find('img')
        //console.log( img.prop('src') );
        expect( img.prop('src') ).toBe( url )
        expect( img.prop('alt') ).toBe( title )
    })

    test('debe de tener animate__fadeIn', () => {
        
        const div = wrapper.find('div')
        const className = div.prop('className');
    
        expect(className.includes('animate__fadeIn')).toBe(true)


        
    })
    
    
    
    
})
