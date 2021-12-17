import {validateEmail} from "utils";

test('Should validate email', () => {
    expect(validateEmail("sasa@gmail.com")).toBe(true)
    expect(validateEmail( "something@something.com")).toBe(true);
    expect(validateEmail("someone@localhost.localdomain")).toBe(true);
    expect(validateEmail("someone@127.0.0.1")).toBe(false);
    expect(validateEmail("a/b@domain.com")).toBe(true);
    expect(validateEmail("{}@domain.com")).toBe(true);
    expect(validateEmail("m*'!%@something.sa")).toBe(true);
    expect(validateEmail("tu!!7n7.ad##0!!!@company.ca")).toBe(true);
    expect(validateEmail("%@com.com")).toBe(true);
    expect(validateEmail("!#$%&'*+/=?^_`{|}~.-@com.com")).toBe(true);
    expect(validateEmail("someone@do-ma-in.com")).toBe(true);
    expect(validateEmail("a@p.com")).toBe(true);
    expect(validateEmail("")).toBe(false);
    expect(validateEmail("someone@somewhere.com.")).toBe(false);
    expect(validateEmail("someone@somewhere_com")).toBe(false);
    expect(validateEmail("someone@some:where.com")).toBe(false);
    expect(validateEmail(".")).toBe(false);
    expect(validateEmail("F/s/f/a@feo+re.com")).toBe(false);
    expect(validateEmail( "some+long+email+address@some+host-weird-/looking.com")).toBe(false);
    expect(validateEmail("invalid:email@example.com")).toBe(false);
    expect(validateEmail("@somewhere.com")).toBe(false);
    expect(validateEmail("example.com")).toBe(false);
    expect(validateEmail("@@example.com")).toBe(false);
    expect(validateEmail("a space@example.com")).toBe(false);
    expect(validateEmail("something@ex..ample.com")).toBe(false);
    expect(validateEmail("a\b@c")).toBe(false);})
