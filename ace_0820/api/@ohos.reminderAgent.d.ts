/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { AsyncCallback } from './basic';
import notification from './@ohos.notification';
import { NotificationSlot } from './notification/notificationSlot';

/**
 * Reminder agent.
 *
 * @since 7
 * @import reminderAgent from '@ohos.reminderAgent';
 * @devices phone
 * @permission ohos.permission.PUBLISH_AGENT_REMINDER
 */
declare namespace reminderAgent {
    /**
     * Publishes a scheduled reminder.
     *
     * @param reminderReq Indicates the reminder instance to publish.
     * @param callback Indicates the callback function.
     * @returns reminder id
     *
     * @since 7
     */
    function publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<number>): void;
    function publishReminder(reminderReq: ReminderRequest): Promise<number>;

    /**
     * Cancels a reminder.
     *
     * @param reminderId Indicates the reminder id.
     * @param callback Indicates the callback function.
     *
     * @since 7
     */
    function cancelReminder(reminderId: number, callback: AsyncCallback<void>): void;
    function cancelReminder(reminderId: number): Promise<void>;

    /**
     * Obtains all the valid reminders of current application.
     *
     * @param callback Indicates the callback function.
     *
     * @since 7
     */
    function getValidReminders(callback: AsyncCallback<Array<ReminderRequest>>): void;
    function getValidReminders(): Promise<Array<ReminderRequest>>;

    /**
     * Cancels all the reminders of current application.
     *
     * @param callback Indicates the callback function.
     *
     * @since 7
     */
    function cancelAllReminders(callback: AsyncCallback<void>): void;
    function cancelAllReminders(): Promise<void>;

    /**
     * Add notification slot.
     *
     * @param slot Indicates the slot.
     * @param callback Indicates the callback function.
     *
     * @since 7
     */
    function addNotificationSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void;
    function addNotificationSlot(slot: NotificationSlot): Promise<void>;

    /**
     * Deletes a created notification slot based on the slot type.
     *
     * @param slotType Indicates the type of the slot.
     *
     * @since 7
     */
    function removeNotificationSlot(slotType: notification.SlotType, callback: AsyncCallback<void>): void;
    function removeNotificationSlot(slotType: notification.SlotType): Promise<void>;

    /**
     * Declares action button type.
     *
     * @since 7
     */
    export enum ActionButtonType {
        /**
         * Indicates the action button type is close.
         *
         * @since 7
         */
        ACTION_BUTTON_TYPE_CLOSE = 0,

        /**
         * Indicates the action button type is snooze.
         *
         * @since 7
         */
        ACTION_BUTTON_TYPE_SNOOZE = 1
    }

    /**
     * Declares reminder type.
     *
     * @since 7
     */
    export enum ReminderType {
        REMINDER_TYPE_TIMER = 0,
        REMINDER_TYPE_CALENDAR = 1,
        REMINDER_TYPE_ALARM = 2
    }

    /**
     * Action button information.
     * The button will show on displayed reminder.
     *
     * @since 7
     */
    interface ActionButton {
        title: string;  // Indicates the title.
        type: ActionButtonType;  // Indicates the type.
    }

    /**
     * Want agent information.
     * It will switch to target ability when you click the displayed reminder.
     *
     * @since 7
     */
    interface WantAgent {
        pkgName: string;  // Indicates the package name.
        abilityName: string;  // Indicates the ability name.
    }

    /**
     * max screen want agent information.
     *
     * @since 7
     */
    interface MaxScreenWantAgent {
        pkgName: string;  // Indicates the package name.
        abilityName: string;  // Indicates the ability name.
    }

    /**
     * Reminder common information.
     *
     * @since 7
     */
    interface ReminderRequest {
        reminderType: ReminderType;  // reminder type
        actionButton?: [ActionButton?, ActionButton?];  // action button
        wantAgent?: WantAgent;  // want agent
        maxScreenWantAgent?: MaxScreenWantAgent  // maxScreen want agent
        ringDuration?: number;  // ring duration in seconds.
        snoozeTimes?: number;  // snooze times.
        timeInterval?: number;  // time interval in seconds for snooze.
        title?: string;  // reminder title.
        content?: string;  // reminder content.
        expiredContent?: string;  // reminder expired content.
        snoozeContent?: string;  // reminder snooze content.
        notificationId?: number;  // reminder notification id.
        slotType?: notification.SlotType; // notification slot id
    }

    /**
     * Calendar reminder information.
     *
     * @since 7
     */
    interface ReminderRequestCalendar extends ReminderRequest {
        dateTime: LocalDateTime;
        repeatMonths?: Array<number>;
        repeatDays?: Array<number>;
    }

    /**
     * Alarm reminder information.
     *
     * @since 7
     */
    interface ReminderRequestAlarm extends ReminderRequest {
        hour: number;
        minute: number;
        daysOfWeek?: Array<number>;
    }

    /**
     * CountDown reminder information.
     *
     * @since 7
     */
    interface ReminderRequestTimer extends ReminderRequest {
        triggerTimeInSeconds: number;
    }

    /**
     * date time information.
     *
     * @since 7
     */
    interface LocalDateTime {
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second?: number;
    }
}
export default reminderAgent;