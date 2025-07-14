import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import BookService from './components/BookService';
import SelectServices from './components/SelectServices';
import BookingSummary from './components/BookingSummary';
import Payment from './components/Payment';
import BookingConfirmation from './components/BookingConfirmation';
import MyBookings from './components/MyBookings';
import BookingDetails from './components/BookingDetails';
import DroneStatus from './components/DroneStatus';
import Profile from './components/Profile';
import ExpandedProfile from './components/ExpandedProfile';
import EditProfile from './components/EditProfile';
import ChangeLanguage from './components/ChangeLanguage';
import AccountSettings from './components/AccountSettings';
import Invoices from './components/Invoices';
import DroneSummary from './components/DroneSummary';
import CropReports from './components/CropReports';
import CropReportDetailed from './components/CropReportDetailed';
import DroneMonitoringReport from './components/DroneMonitoringReport';
import Help from './components/Help';
import BookingFailed from './components/BookingFailed';
import Notifications from './components/Notifications';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home} />
                <Route path="/book-service" component={BookService} />
                <Route path="/select-services" component={SelectServices} />
                <Route path="/booking-summary" component={BookingSummary} />
                <Route path="/payment" component={Payment} />
                <Route path="/booking-confirmation" component={BookingConfirmation} />
                <Route path="/my-bookings" component={MyBookings} />
                <Route path="/booking-details" component={BookingDetails} />
                <Route path="/drone-status" component={DroneStatus} />
                <Route path="/profile" component={Profile} />
                <Route path="/expanded-profile" component={ExpandedProfile} />
                <Route path="/edit-profile" component={EditProfile} />
                <Route path="/change-language" component={ChangeLanguage} />
                <CRoute path="/account-settings" component={AccountSettings} />
                <Route path="/invoices" component={Invoices} />
                <Route path="/drone-summary" component={DroneSummary} />
                <Route path="/crop-reports" component={CropReports} />
                <Route path="/crop-report-detailed" component={CropReportDetailed} />
                <Route path="/drone-monitoring-report" component={DroneMonitoringReport} />
                <Route path="/help" component={Help} />
                <Route path="/booking-failed" component={BookingFailed} />
                <Route path="/notifications" component={Notifications} />
            </Switch>
        </Router>
    );
}

export default AppRouter;
