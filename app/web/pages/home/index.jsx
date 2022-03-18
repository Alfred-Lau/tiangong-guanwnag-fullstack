"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const useFramework_1 = (0, tslib_1.__importDefault)(require("./useFramework"));
// export type HomeProps = { title: string; subtitle: string };
function Home() {
    const framework = (0, useFramework_1.default)();
    console.log(framework);
    return (<div>
      <h3>框架首页</h3>
      <ul>
        {framework === null || framework === void 0 ? void 0 : framework.features.map((feature) => {
            return <li>{feature}</li>;
        })}
      </ul>
    </div>);
}
exports.default = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanN4Iiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtEQUEwQjtBQUMxQiwrRUFBMEM7QUFFMUMsK0RBQStEO0FBRS9ELFNBQXdCLElBQUk7SUFDMUIsTUFBTSxTQUFTLEdBQW9DLElBQUEsc0JBQVksR0FBRSxDQUFDO0lBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkIsT0FBTyxDQUNMLENBQUMsR0FBRyxDQUNGO01BQUEsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDWjtNQUFBLENBQUMsRUFBRSxDQUNEO1FBQUEsQ0FBQyxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FDSjtNQUFBLEVBQUUsRUFBRSxDQUNOO0lBQUEsRUFBRSxHQUFHLENBQUMsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQWJELHVCQWFDIn0=