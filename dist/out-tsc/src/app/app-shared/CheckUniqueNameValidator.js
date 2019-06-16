import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
export function CheckUniqueNameValidator(http) {
    return function (control) {
        console.log("CheckUniqueNameValidator");
        var value = control.value;
        var url = "http://localhost:9000/checkName";
        var params = new HttpParams().set("name", value);
        return http
            .get(url, { params: params })
            .pipe(map(function (result) { return result.valid ? null : { uniqueName: true }; }));
    };
}
//# sourceMappingURL=CheckUniqueNameValidator.js.map