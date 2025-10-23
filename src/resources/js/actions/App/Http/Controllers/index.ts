import Auth from './Auth'
import UserController from './UserController'
import AssetCategoryController from './AssetCategoryController'
import AssetKindController from './AssetKindController'
import AssetImageController from './AssetImageController'
import AssetController from './AssetController'
import AssetItemController from './AssetItemController'
import VendorController from './VendorController'
import AssetQrController from './AssetQrController'
import StaffController from './StaffController'
import DepartmentController from './DepartmentController'
import PositionController from './PositionController'
import Settings from './Settings'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
UserController: Object.assign(UserController, UserController),
AssetCategoryController: Object.assign(AssetCategoryController, AssetCategoryController),
AssetKindController: Object.assign(AssetKindController, AssetKindController),
AssetImageController: Object.assign(AssetImageController, AssetImageController),
AssetController: Object.assign(AssetController, AssetController),
AssetItemController: Object.assign(AssetItemController, AssetItemController),
VendorController: Object.assign(VendorController, VendorController),
AssetQrController: Object.assign(AssetQrController, AssetQrController),
StaffController: Object.assign(StaffController, StaffController),
DepartmentController: Object.assign(DepartmentController, DepartmentController),
PositionController: Object.assign(PositionController, PositionController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers