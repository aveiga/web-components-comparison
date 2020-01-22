import { MyComponent } from "./my-component";

describe("MyComponent", () => {
  it("accepts setting the 'first' property", () => {
    let myComponent = new MyComponent();
    myComponent.first = "cenas";
    expect(myComponent.first).toEqual("cenas");
  });

  it("returns the full name", () => {
    let myComponent = new MyComponent();
    myComponent.first = "James";
    myComponent.last = "Quincy";
    myComponent.middle = "Earl";

    expect(myComponent.render()).toBeTruthy();
  });
});
