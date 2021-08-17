import {NewWordForm} from "../index";
import {render, screen, fireEvent} from "@testing-library/react";

// const mockDispatch = jest.fn()
//
// jest.mock('react-redux', ()=>({
//     useDispatch: () => mockDispatch
// }))
//
//
// describe('<NewWordForm />', () => {
    // it('should update value by increase number ', () => {
    //     render(<NewWordForm/>)
    //     const newValue = '20'
    //     const input = screen.getByTestId('increaseByNumber')
    //     fireEvent.change(input, {
    //         target: {
    //             value: newValue,
    //         }
    //     })
    //     expect(input.value).toBe(newValue)
    // });

    // it('should update value by decrease number ', () => {
    //     render(<Controls/>)
    //     const newValue = '4'
    //     const input = screen.getByTestId('decreaseByNumber')
    //     fireEvent.change(input, {
    //         target: {
    //             value: newValue,
    //         }
    //     })
    //     expect(input.value).toBe(newValue)
    // });
    //
    // it('should dispatch action increase', () => {
    //     render(<NewWordForm/>)
    //     const button = screen.getByTestId('increaseByClick')
    //     fireEvent.click(button)
    //     expect(mockDispatch).toHaveBeenCalledWith(increase())
    // });
    //
    // it('should dispatch action decrease', () => {
    //     render(<Controls/>)
    //     const button = screen.getByTestId('decreaseByClick')
    //     fireEvent.click(button)
    //     expect(mockDispatch).toHaveBeenCalledWith(decrease())
    // });
    //
    // it('should dispatch action increaseBy with new value', () => {
    //     render(<Controls/>)
    //     const newValue = 20
    //     const button = screen.getByTestId('increaseByClickNumber')
    //     const input = screen.getByTestId('increaseByNumber')
    //     fireEvent.change(input, {
    //         target: {
    //             value: newValue,
    //         }
    //     })
    //     fireEvent.click(button)
    //     expect(mockDispatch).toHaveBeenCalledWith(increaseBy(newValue))
    // });
    //
    // it('should dispatch action decreaseBy with new value', () => {
    //     render(<Controls/>)
    //     const newValue = 4
    //     const button = screen.getByTestId('decreaseByCLickNumber')
    //     const input = screen.getByTestId('decreaseByNumber')
    //     fireEvent.change(input, {
    //         target: {
    //             value: newValue,
    //         }
    //     })
    //     fireEvent.click(button)
    //     expect(mockDispatch).toHaveBeenCalledWith(decreaseBy(newValue))
    // });
// });