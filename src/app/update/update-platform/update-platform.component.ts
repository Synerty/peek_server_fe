import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-update-platform',
    templateUrl: './update-platform.component.html',
    styleUrls: ['./update-platform.component.css']
})
export class UpdatePlatformComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    old() {


        // $scope.serverRestarting = false;
        //
        // self.rspGood = function (data, status, headers, config) {
        //     $scope.progressPercentage = '';
        //     if (data.error) {
        //         logError("Software Update Failed<br/>" + data.error);
        //     } else {
        //         $scope.serverRestarting = true;
        //         logSuccess("Software Update Complete<br/>New version is "
        //             + data.message + "<br/><br/>Server will restart");
        //         self.reconnectVortex();
        //     }
        // };
        //
        // self.rspBad = function (data, status, headers, config) {
        //     $scope.progressPercentage = '';
        //     logError("Software Update Failed<br/>" + data.error);
        // };
        //
        // self.reconnectVortex = function () {
        //     setTimeout(function () {
        //         logSuccess("Server is restarting");
        //     }, 3000);
        //     setTimeout(function () {
        //         location.reload();
        //     }, 8000);
        // };
        //
        // $scope.upload = function (files, event, rejectedFiles) {
        //     if (rejectedFiles && rejectedFiles.length) {
        //         logError(rejectedFiles[0].name + " does not end in .tar.bz2");
        //         return;
        //     }
        //
        //     if (!(files && files.length))
        //         return;
        //
        //     var file = files[0];
        //     Upload.upload({
        //         url: '/peek_server_be.update.platform',
        //         file: file
        //     }).progress(function (evt) {
        //         $scope.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        //     }).success(self.rspGood)
        //         .error(self.rspBad);
        // };


    }
}
