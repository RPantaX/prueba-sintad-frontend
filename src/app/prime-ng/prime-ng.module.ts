import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { MenuItem } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService, SelectItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  exports:[
    MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    MenubarModule,
    ToolbarModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    InputTextModule,
    RippleModule,
    SidebarModule,
    StyleClassModule,
    ChipModule,
    DividerModule,
    ProgressSpinnerModule,
    ToolbarModule,
    TagModule,
    DropdownModule,
    TableModule,
    ToastModule,
    DialogModule,
    RadioButtonModule
  ]
})
export class PrimeNgModule { }