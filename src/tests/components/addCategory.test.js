import { shallow } from "enzyme"
import '@testing-library/jest-dom'
import React from 'react';
import { AddCategory } from "../../components/AddCategory";

describe('Prueebas en <AddCategory/>', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />); 

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />); 

    });

    test('debe mostrarse correctamentee', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'

        input.simulate('change',{target:{value}})
    })
    
    test('NO debe de psotear la info con submit', () => {
        
        wrapper.find('form').simulate('submit',{ preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled()
    })
    
    test('debe de llamar el setCategories y limpiar la caja de texto ', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'

        //simular el inputChange
        input.simulate('change',{target:{value}})

        //simular el submit
        wrapper.find('form').simulate('submit',{ preventDefault(){} });

        //setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled()
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) )

        //el valor del input debe de estar een ""
        expect( wrapper.find('input').prop('value') ).toBe('')

    }); 
    
    
});
