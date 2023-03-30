// 関数をインポートしている
import { isZero } from "./isZero";

test("0を渡したらTrueになること", () => {
    const result = isZero(0);
    // expect ＋ toBe で、関数とその期待値を設定してテストする
    expect(result).toBe(true);
});

test("1を渡したらfalseになること", () => {
    const result = isZero(1);
    expect(result).toBe(false);
});
