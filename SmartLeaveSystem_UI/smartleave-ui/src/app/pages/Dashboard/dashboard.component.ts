import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type NavItem = {
  label: string;
  icon: string;
  active?: boolean;
};

type LeaveRequest = {
  employee: string;
  type: string;
  days: string;
  status: 'Approved' | 'Pending' | 'Needs Review';
};

type TeamMember = {
  name: string;
  role: string;
  status: string;
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  readonly navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'DB', active: true },
    { label: 'Apply Leave', icon: 'AL' },
    { label: 'My Leaves', icon: 'ML' },
    { label: 'Team Calendar', icon: 'TC' },
    { label: 'Approvals', icon: 'AP' },
    { label: 'Leave Balance', icon: 'LB' },
    { label: 'Reports', icon: 'RP' },
    { label: 'Employees', icon: 'EM' },
    { label: 'Policies', icon: 'PL' },
    { label: 'Holidays', icon: 'HD' },
    { label: 'Notifications', icon: 'NT' },
    { label: 'Settings', icon: 'ST' }
  ];

  readonly statCards = [
    { label: 'Pending Requests', value: '24', change: '+6 today' },
    { label: 'Team On Leave', value: '08', change: '2 remote teams affected' },
    { label: 'Approval Rate', value: '96%', change: 'Up 4.2% this month' },
    { label: 'Balance Alerts', value: '12', change: 'Needs policy review' }
  ];

  readonly leaveRequests: LeaveRequest[] = [
    { employee: 'Ananya Sharma', type: 'Casual Leave', days: 'Apr 24 - Apr 26', status: 'Pending' },
    { employee: 'Rohan Mehta', type: 'Sick Leave', days: 'Apr 23', status: 'Approved' },
    { employee: 'Priya Nair', type: 'Vacation', days: 'Apr 29 - May 2', status: 'Needs Review' },
    { employee: 'Karan Joshi', type: 'Work From Home', days: 'Apr 25', status: 'Approved' }
  ];

  readonly teamMembers: TeamMember[] = [
    { name: 'Maya Singh', role: 'HR Manager', status: 'Reviewing 7 requests' },
    { name: 'Amit Patel', role: 'Engineering Lead', status: 'On leave tomorrow' },
    { name: 'Sara Khan', role: 'People Ops', status: 'Available for approvals' }
  ];

  readonly activity = [
    'Priya submitted a 4-day vacation request for next week.',
    'Rohan sick leave request was approved by Maya.',
    'April holiday policy was updated for Hyderabad office.',
    'Carry-forward balances were recalculated for Q2.'
  ];
}
