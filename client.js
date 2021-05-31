'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

var MsgDefs = {
    'file_id': {
        'num': 0,
        'fields': [{
                'name': 'type',
                'number': 0,
                'type': 'file',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'manufacturer',
                'number': 1,
                'type': 'manufacturer',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'product',
                'number': 2,
                'type': 'uint16',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'serial_number',
                'number': 3,
                'type': 'uint32z',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'time_created',
                'number': 4,
                'type': 'date_time',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'number',
                'number': 5,
                'type': 'uint16',
                'scale': null,
                'offset': null,
                'units': ''
            }, { 'name': 'product_name', 'number': 8, 'type': 'string', 'scale': null, 'offset': null, 'units': '' }]
    },
    'capabilities': {
        'num': 1,
        'fields': [{
                'name': 'languages',
                'number': 0,
                'type': 'uint8z',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'sports',
                'number': 1,
                'type': 'sport_bits_0',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'workouts_supported',
                'number': 21,
                'type': 'workout_capabilities',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'connectivity_supported',
                'number': 23,
                'type': 'connectivity_capabilities',
                'scale': null,
                'offset': null,
                'units': ''
            }]
    },
    'device_settings': {
        'num': 2,
        'fields': [{
                'name': 'active_time_zone',
                'number': 0,
                'type': 'uint8',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'utc_offset',
                'number': 1,
                'type': 'uint32',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'time_offset',
                'number': 2,
                'type': 'uint32',
                'scale': null,
                'offset': null,
                'units': 's'
            }, {
                'name': 'time_zone_offset',
                'number': 5,
                'type': 'sint8',
                'scale': 4,
                'offset': null,
                'units': 'hr'
            }, {
                'name': 'display_orientation',
                'number': 55,
                'type': 'display_orientation',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'mounting_side',
                'number': 56,
                'type': 'side',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'number_of_screens',
                'number': 94,
                'type': 'uint8',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'smart_notification_display_orientation',
                'number': 95,
                'type': 'display_orientation',
                'scale': null,
                'offset': null,
                'units': ''
            }]
    },
    'user_profile': {
        'num': 3,
        'fields': [{
                'name': 'friendly_name',
                'number': 0,
                'type': 'string',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'gender', 'number': 1, 'type': 'gender', 'scale': null, 'offset': 0, 'units': '' }, {
                'name': 'age',
                'number': 2,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'years'
            }, { 'name': 'height', 'number': 3, 'type': 'uint8', 'scale': 100, 'offset': 0, 'units': 'm' }, {
                'name': 'weight',
                'number': 4,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': 'kg'
            }, {
                'name': 'language',
                'number': 5,
                'type': 'language',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'elev_setting',
                'number': 6,
                'type': 'display_measure',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'weight_setting',
                'number': 7,
                'type': 'display_measure',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'resting_heart_rate',
                'number': 8,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'bpm'
            }, {
                'name': 'default_max_running_heart_rate',
                'number': 9,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'bpm'
            }, {
                'name': 'default_max_biking_heart_rate',
                'number': 10,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'bpm'
            }, {
                'name': 'default_max_heart_rate',
                'number': 11,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'bpm'
            }, {
                'name': 'hr_setting',
                'number': 12,
                'type': 'display_heart',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'speed_setting',
                'number': 13,
                'type': 'display_measure',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'dist_setting',
                'number': 14,
                'type': 'display_measure',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'power_setting',
                'number': 16,
                'type': 'display_power',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'activity_class',
                'number': 17,
                'type': 'activity_class',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'position_setting',
                'number': 18,
                'type': 'display_position',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'temperature_setting',
                'number': 21,
                'type': 'display_measure',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'local_id',
                'number': 22,
                'type': 'user_local_id',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'global_id',
                'number': 23,
                'type': 'byte',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'height_setting',
                'number': 30,
                'type': 'display_measure',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'hrm_profile': {
        'num': 4,
        'fields': [{
                'name': 'enabled',
                'number': 0,
                'type': 'bool',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'hrm_ant_id',
                'number': 1,
                'type': 'uint16z',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'log_hrv',
                'number': 2,
                'type': 'bool',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'hrm_ant_id_trans_type',
                'number': 3,
                'type': 'uint8z',
                'scale': null,
                'offset': null,
                'units': ''
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': null, 'units': '' }]
    },
    'sdm_profile': {
        'num': 5,
        'fields': [{
                'name': 'enabled',
                'number': 0,
                'type': 'bool',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'sdm_ant_id',
                'number': 1,
                'type': 'uint16z',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'sdm_cal_factor',
                'number': 2,
                'type': 'uint16',
                'scale': 10,
                'offset': null,
                'units': '%'
            }, {
                'name': 'odometer',
                'number': 3,
                'type': 'uint32',
                'scale': 100,
                'offset': null,
                'units': 'm'
            }, {
                'name': 'speed_source',
                'number': 4,
                'type': 'bool',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'sdm_ant_id_trans_type',
                'number': 5,
                'type': 'uint8z',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'odometer_rollover',
                'number': 7,
                'type': 'uint8',
                'scale': null,
                'offset': null,
                'units': ''
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': null, 'units': '' }]
    },
    'bike_profile': {
        'num': 6,
        'fields': [{
                'name': 'name',
                'number': 0,
                'type': 'string',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'sport',
                'number': 1,
                'type': 'sport',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'sub_sport',
                'number': 2,
                'type': 'sub_sport',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'odometer',
                'number': 3,
                'type': 'uint32',
                'scale': 100,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'bike_spd_ant_id',
                'number': 4,
                'type': 'uint16z',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'bike_cad_ant_id',
                'number': 5,
                'type': 'uint16z',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'bike_spdcad_ant_id',
                'number': 6,
                'type': 'uint16z',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'bike_power_ant_id',
                'number': 7,
                'type': 'uint16z',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'custom_wheelsize',
                'number': 8,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'auto_wheelsize',
                'number': 9,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'bike_weight',
                'number': 10,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': 'kg'
            }, {
                'name': 'power_cal_factor',
                'number': 11,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'auto_wheel_cal',
                'number': 12,
                'type': 'bool',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'auto_power_zero',
                'number': 13,
                'type': 'bool',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'id',
                'number': 14,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'spd_enabled',
                'number': 15,
                'type': 'bool',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'cad_enabled',
                'number': 16,
                'type': 'bool',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'spdcad_enabled',
                'number': 17,
                'type': 'bool',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'power_enabled',
                'number': 18,
                'type': 'bool',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'crank_length',
                'number': 19,
                'type': 'uint8',
                'scale': 2,
                'offset': -110,
                'units': 'mm'
            }, {
                'name': 'enabled',
                'number': 20,
                'type': 'bool',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'bike_spd_ant_id_trans_type',
                'number': 21,
                'type': 'uint8z',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'bike_cad_ant_id_trans_type',
                'number': 22,
                'type': 'uint8z',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'bike_spdcad_ant_id_trans_type',
                'number': 23,
                'type': 'uint8z',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'bike_power_ant_id_trans_type',
                'number': 24,
                'type': 'uint8z',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'odometer_rollover',
                'number': 37,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'front_gear_num',
                'number': 38,
                'type': 'uint8z',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'front_gear',
                'number': 39,
                'type': 'uint8z',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'rear_gear_num',
                'number': 40,
                'type': 'uint8z',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'rear_gear',
                'number': 41,
                'type': 'uint8z',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'shimano_di2_enabled',
                'number': 44,
                'type': 'bool',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'zones_target': {
        'num': 7,
        'fields': [{
                'name': 'max_heart_rate',
                'number': 1,
                'type': 'uint8',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'threshold_heart_rate',
                'number': 2,
                'type': 'uint8',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'functional_threshold_power',
                'number': 3,
                'type': 'uint16',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'hr_calc_type',
                'number': 5,
                'type': 'hr_zone_calc',
                'scale': null,
                'offset': null,
                'units': ''
            }, { 'name': 'pwr_calc_type', 'number': 7, 'type': 'pwr_zone_calc', 'scale': null, 'offset': null, 'units': '' }]
    },
    'hr_zone': {
        'num': 8,
        'fields': [{
                'name': 'high_bpm',
                'number': 1,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'bpm'
            }, {
                'name': 'name',
                'number': 2,
                'type': 'string',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'power_zone': {
        'num': 9,
        'fields': [{
                'name': 'high_value',
                'number': 1,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'name',
                'number': 2,
                'type': 'string',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'met_zone': {
        'num': 10,
        'fields': [{
                'name': 'high_bpm',
                'number': 1,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'calories',
                'number': 2,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': 'kcal / min'
            }, {
                'name': 'fat_calories',
                'number': 3,
                'type': 'uint8',
                'scale': 10,
                'offset': 0,
                'units': 'kcal / min'
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'sport': {
        'num': 12,
        'fields': [{
                'name': 'sport',
                'number': 0,
                'type': 'sport',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'sub_sport',
                'number': 1,
                'type': 'sub_sport',
                'scale': null,
                'offset': null,
                'units': ''
            }, { 'name': 'name', 'number': 3, 'type': 'string', 'scale': null, 'offset': null, 'units': '' }]
    },
    'goal': {
        'num': 15,
        'fields': [{
                'name': 'sport',
                'number': 0,
                'type': 'sport',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'sub_sport',
                'number': 1,
                'type': 'sub_sport',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'start_date',
                'number': 2,
                'type': 'date_time',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'end_date',
                'number': 3,
                'type': 'date_time',
                'scale': null,
                'offset': null,
                'units': ''
            }, { 'name': 'type', 'number': 4, 'type': 'goal', 'scale': null, 'offset': null, 'units': '' }, {
                'name': 'value',
                'number': 5,
                'type': 'uint32',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'repeat',
                'number': 6,
                'type': 'bool',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'target_value',
                'number': 7,
                'type': 'uint32',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'recurrence',
                'number': 8,
                'type': 'goal_recurrence',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'recurrence_value',
                'number': 9,
                'type': 'uint16',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'enabled',
                'number': 10,
                'type': 'bool',
                'scale': null,
                'offset': null,
                'units': ''
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': null, 'units': '' }]
    },
    'session': {
        'num': 18,
        'fields': [{
                'name': 'event',
                'number': 0,
                'type': 'event',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'event_type',
                'number': 1,
                'type': 'event_type',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'start_time',
                'number': 2,
                'type': 'date_time',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'start_position_lat',
                'number': 3,
                'type': 'sint32',
                'scale': null,
                'offset': 0,
                'units': 'semicircles'
            }, {
                'name': 'start_position_long',
                'number': 4,
                'type': 'sint32',
                'scale': null,
                'offset': 0,
                'units': 'semicircles'
            }, {
                'name': 'sport',
                'number': 5,
                'type': 'sport',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'sub_sport',
                'number': 6,
                'type': 'sub_sport',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'total_elapsed_time',
                'number': 7,
                'type': 'uint32',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'total_timer_time',
                'number': 8,
                'type': 'uint32',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'total_distance',
                'number': 9,
                'type': 'uint32',
                'scale': 100,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'total_cycles',
                'number': 10,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 'cycles'
            }, {
                'name': 'total_calories',
                'number': 11,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'kcal'
            }, {
                'name': 'total_fat_calories',
                'number': 13,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'kcal'
            }, {
                'name': 'avg_speed',
                'number': 14,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'max_speed',
                'number': 15,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'avg_heart_rate',
                'number': 16,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'bpm'
            }, {
                'name': 'max_heart_rate',
                'number': 17,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'bpm'
            }, {
                'name': 'avg_cadence',
                'number': 18,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'rpm'
            }, {
                'name': 'max_cadence',
                'number': 19,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'rpm'
            }, {
                'name': 'avg_power',
                'number': 20,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'max_power',
                'number': 21,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'total_ascent',
                'number': 22,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'total_descent',
                'number': 23,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'total_training_effect',
                'number': 24,
                'type': 'uint8',
                'scale': 10,
                'offset': 0,
                'units': ''
            }, {
                'name': 'first_lap_index',
                'number': 25,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'num_laps',
                'number': 26,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'event_group',
                'number': 27,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'trigger',
                'number': 28,
                'type': 'session_trigger',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'nec_lat',
                'number': 29,
                'type': 'sint32',
                'scale': null,
                'offset': 0,
                'units': 'semicircles'
            }, {
                'name': 'nec_long',
                'number': 30,
                'type': 'sint32',
                'scale': null,
                'offset': 0,
                'units': 'semicircles'
            }, {
                'name': 'swc_lat',
                'number': 31,
                'type': 'sint32',
                'scale': null,
                'offset': 0,
                'units': 'semicircles'
            }, {
                'name': 'swc_long',
                'number': 32,
                'type': 'sint32',
                'scale': null,
                'offset': 0,
                'units': 'semicircles'
            }, {
                'name': 'normalized_power',
                'number': 34,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'training_stress_score',
                'number': 35,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': 'tss'
            }, {
                'name': 'intensity_factor',
                'number': 36,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'if'
            }, {
                'name': 'left_right_balance',
                'number': 37,
                'type': 'left_right_balance_100',
                'scale': 100,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'avg_stroke_count',
                'number': 41,
                'type': 'uint32',
                'scale': 10,
                'offset': 0,
                'units': 'strokes/lap'
            }, {
                'name': 'avg_stroke_distance',
                'number': 42,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'swim_stroke',
                'number': 43,
                'type': 'swim_stroke',
                'scale': null,
                'offset': 0,
                'units': 'swim_stroke'
            }, {
                'name': 'pool_length',
                'number': 44,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'threshold_power',
                'number': 45,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'pool_length_unit',
                'number': 46,
                'type': 'display_measure',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'num_active_lengths',
                'number': 47,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'lengths'
            }, {
                'name': 'total_work',
                'number': 48,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 'J'
            }, {
                'name': 'avg_altitude',
                'number': 49,
                'type': 'uint16',
                'scale': 5,
                'offset': -500,
                'units': 'm'
            }, {
                'name': 'max_altitude',
                'number': 50,
                'type': 'uint16',
                'scale': 5,
                'offset': -500,
                'units': 'm'
            }, {
                'name': 'gps_accuracy',
                'number': 51,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'avg_grade',
                'number': 52,
                'type': 'sint16',
                'scale': 100,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'avg_pos_grade',
                'number': 53,
                'type': 'sint16',
                'scale': 100,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'avg_neg_grade',
                'number': 54,
                'type': 'sint16',
                'scale': 100,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'max_pos_grade',
                'number': 55,
                'type': 'sint16',
                'scale': 100,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'max_neg_grade',
                'number': 56,
                'type': 'sint16',
                'scale': 100,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'avg_temperature',
                'number': 57,
                'type': 'sint8',
                'scale': null,
                'offset': 0,
                'units': 'C'
            }, {
                'name': 'max_temperature',
                'number': 58,
                'type': 'sint8',
                'scale': null,
                'offset': 0,
                'units': 'C'
            }, {
                'name': 'total_moving_time',
                'number': 59,
                'type': 'uint32',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'avg_pos_vertical_speed',
                'number': 60,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'avg_neg_vertical_speed',
                'number': 61,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'max_pos_vertical_speed',
                'number': 62,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'max_neg_vertical_speed',
                'number': 63,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'min_heart_rate',
                'number': 64,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'bpm'
            }, {
                'name': 'time_in_hr_zone',
                'number': 65,
                'type': 'uint32_array',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'time_in_speed_zone',
                'number': 66,
                'type': 'uint32_array',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'time_in_cadence_zone',
                'number': 67,
                'type': 'uint32_array',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'time_in_power_zone',
                'number': 68,
                'type': 'uint32_array',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'avg_lap_time',
                'number': 69,
                'type': 'uint32',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'best_lap_index',
                'number': 70,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'min_altitude',
                'number': 71,
                'type': 'uint16',
                'scale': 5,
                'offset': -500,
                'units': 'm'
            }, {
                'name': 'player_score',
                'number': 82,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'opponent_score',
                'number': 83,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'opponent_name',
                'number': 84,
                'type': 'string',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'stroke_count',
                'number': 85,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'counts'
            }, {
                'name': 'zone_count',
                'number': 86,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'counts'
            }, {
                'name': 'max_ball_speed',
                'number': 87,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'avg_ball_speed',
                'number': 88,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'avg_vertical_oscillation',
                'number': 89,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': 'mm'
            }, {
                'name': 'avg_stance_time_percent',
                'number': 90,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'avg_stance_time',
                'number': 91,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': 'ms'
            }, {
                'name': 'avg_fractional_cadence',
                'number': 92,
                'type': 'uint8',
                'scale': 128,
                'offset': 0,
                'units': 'rpm'
            }, {
                'name': 'max_fractional_cadence',
                'number': 93,
                'type': 'uint8',
                'scale': 128,
                'offset': 0,
                'units': 'rpm'
            }, {
                'name': 'total_fractional_cycles',
                'number': 94,
                'type': 'uint8',
                'scale': 128,
                'offset': 0,
                'units': 'cycles'
            }, {
                'name': 'avg_total_hemoglobin_conc',
                'number': 95,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'g/dL'
            }, {
                'name': 'min_total_hemoglobin_conc',
                'number': 96,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'g/dL'
            }, {
                'name': 'max_total_hemoglobin_conc',
                'number': 97,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'g/dL'
            }, {
                'name': 'avg_saturated_hemoglobin_percent',
                'number': 98,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'min_saturated_hemoglobin_percent',
                'number': 99,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'max_saturated_hemoglobin_percent',
                'number': 100,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'avg_left_torque_effectiveness',
                'number': 101,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'avg_right_torque_effectiveness',
                'number': 102,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'avg_left_pedal_smoothness',
                'number': 103,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'avg_right_pedal_smoothness',
                'number': 104,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'avg_combined_pedal_smoothness',
                'number': 105,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'sport_index',
                'number': 111,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'time_standing',
                'number': 112,
                'type': 'uint32',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'stand_count',
                'number': 113,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'avg_left_pco',
                'number': 114,
                'type': 'sint8',
                'scale': null,
                'offset': 0,
                'units': 'mm'
            }, {
                'name': 'avg_right_pco',
                'number': 115,
                'type': 'sint8',
                'scale': null,
                'offset': 0,
                'units': 'mm'
            }, {
                'name': 'avg_left_power_phase',
                'number': 116,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'degrees'
            }, {
                'name': 'avg_left_power_phase_peak',
                'number': 117,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'degrees'
            }, {
                'name': 'avg_right_power_phase',
                'number': 118,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'degrees'
            }, {
                'name': 'avg_right_power_phase_peak',
                'number': 119,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'degrees'
            }, {
                'name': 'avg_power_position',
                'number': 120,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'max_power_position',
                'number': 121,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'avg_cadence_position',
                'number': 122,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'rpm'
            }, {
                'name': 'max_cadence_position',
                'number': 123,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'rpm'
            }, {
                'name': 'enhanced_avg_speed',
                'number': 124,
                'type': 'uint32',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'enhanced_max_speed',
                'number': 125,
                'type': 'uint32',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'enhanced_avg_altitude',
                'number': 126,
                'type': 'uint32',
                'scale': 5,
                'offset': -500,
                'units': 'm'
            }, {
                'name': 'enhanced_min_altitude',
                'number': 127,
                'type': 'uint32',
                'scale': 5,
                'offset': -500,
                'units': 'm'
            }, {
                'name': 'enhanced_max_altitude',
                'number': 128,
                'type': 'uint32',
                'scale': 5,
                'offset': -500,
                'units': 'm'
            }, {
                'name': 'avg_lev_motor_power',
                'number': 129,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'max_lev_motor_power',
                'number': 130,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'lev_battery_consumption',
                'number': 131,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'avg_vertical_ratio',
                'number': 132,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'avg_stance_time_balance',
                'number': 133,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'avg_step_length',
                'number': 134,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': 'mm'
            }, {
                'name': 'total_anaerobic_effect',
                'number': 137,
                'type': 'uint8',
                'scale': 10,
                'offset': 0,
                'units': ''
            }, {
                'name': 'avg_vam',
                'number': 139,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'timestamp',
                'number': 253,
                'type': 'date_time',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'lap': {
        'num': 19,
        'fields': [{
                'name': 'event',
                'number': 0,
                'type': 'event',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'event_type',
                'number': 1,
                'type': 'event_type',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'start_time',
                'number': 2,
                'type': 'date_time',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'start_position_lat',
                'number': 3,
                'type': 'sint32',
                'scale': null,
                'offset': 0,
                'units': 'semicircles'
            }, {
                'name': 'start_position_long',
                'number': 4,
                'type': 'sint32',
                'scale': null,
                'offset': 0,
                'units': 'semicircles'
            }, {
                'name': 'end_position_lat',
                'number': 5,
                'type': 'sint32',
                'scale': null,
                'offset': 0,
                'units': 'semicircles'
            }, {
                'name': 'end_position_long',
                'number': 6,
                'type': 'sint32',
                'scale': null,
                'offset': 0,
                'units': 'semicircles'
            }, {
                'name': 'total_elapsed_time',
                'number': 7,
                'type': 'uint32',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'total_timer_time',
                'number': 8,
                'type': 'uint32',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'total_distance',
                'number': 9,
                'type': 'uint32',
                'scale': 100,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'total_cycles',
                'number': 10,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 'cycles'
            }, {
                'name': 'total_calories',
                'number': 11,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'kcal'
            }, {
                'name': 'total_fat_calories',
                'number': 12,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'kcal'
            }, {
                'name': 'avg_speed',
                'number': 13,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'max_speed',
                'number': 14,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'avg_heart_rate',
                'number': 15,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'bpm'
            }, {
                'name': 'max_heart_rate',
                'number': 16,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'bpm'
            }, {
                'name': 'avg_cadence',
                'number': 17,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'rpm'
            }, {
                'name': 'max_cadence',
                'number': 18,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'rpm'
            }, {
                'name': 'avg_power',
                'number': 19,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'max_power',
                'number': 20,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'total_ascent',
                'number': 21,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'total_descent',
                'number': 22,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'intensity',
                'number': 23,
                'type': 'intensity',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'lap_trigger',
                'number': 24,
                'type': 'lap_trigger',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'sport',
                'number': 25,
                'type': 'sport',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'event_group',
                'number': 26,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'num_lengths',
                'number': 32,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'lengths'
            }, {
                'name': 'normalized_power',
                'number': 33,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'left_right_balance',
                'number': 34,
                'type': 'left_right_balance_100',
                'scale': 100,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'first_length_index',
                'number': 35,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'avg_stroke_distance',
                'number': 37,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'swim_stroke',
                'number': 38,
                'type': 'swim_stroke',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'sub_sport',
                'number': 39,
                'type': 'sub_sport',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'num_active_lengths',
                'number': 40,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'lengths'
            }, {
                'name': 'total_work',
                'number': 41,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 'J'
            }, {
                'name': 'avg_altitude',
                'number': 42,
                'type': 'uint16',
                'scale': 5,
                'offset': -500,
                'units': 'm'
            }, {
                'name': 'max_altitude',
                'number': 43,
                'type': 'uint16',
                'scale': 5,
                'offset': -500,
                'units': 'm'
            }, {
                'name': 'gps_accuracy',
                'number': 44,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'avg_grade',
                'number': 45,
                'type': 'sint16',
                'scale': 100,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'avg_pos_grade',
                'number': 46,
                'type': 'sint16',
                'scale': 100,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'avg_neg_grade',
                'number': 47,
                'type': 'sint16',
                'scale': 100,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'max_pos_grade',
                'number': 48,
                'type': 'sint16',
                'scale': 100,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'max_neg_grade',
                'number': 49,
                'type': 'sint16',
                'scale': 100,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'avg_temperature',
                'number': 50,
                'type': 'sint8',
                'scale': null,
                'offset': 0,
                'units': 'C'
            }, {
                'name': 'max_temperature',
                'number': 51,
                'type': 'sint8',
                'scale': null,
                'offset': 0,
                'units': 'C'
            }, {
                'name': 'total_moving_time',
                'number': 52,
                'type': 'uint32',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'avg_pos_vertical_speed',
                'number': 53,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'avg_neg_vertical_speed',
                'number': 54,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'max_pos_vertical_speed',
                'number': 55,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'max_neg_vertical_speed',
                'number': 56,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'time_in_hr_zone',
                'number': 57,
                'type': 'uint32_array',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'time_in_speed_zone',
                'number': 58,
                'type': 'uint32_array',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'time_in_cadence_zone',
                'number': 59,
                'type': 'uint32_array',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'time_in_power_zone',
                'number': 60,
                'type': 'uint32_array',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'repetition_num',
                'number': 61,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'min_altitude',
                'number': 62,
                'type': 'uint16',
                'scale': 5,
                'offset': -500,
                'units': 'm'
            }, {
                'name': 'min_heart_rate',
                'number': 63,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'bpm'
            }, {
                'name': 'wkt_step_index',
                'number': 71,
                'type': 'message_index',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'opponent_score',
                'number': 74,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'stroke_count',
                'number': 75,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'counts'
            }, {
                'name': 'zone_count',
                'number': 76,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'counts'
            }, {
                'name': 'avg_vertical_oscillation',
                'number': 77,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': 'mm'
            }, {
                'name': 'avg_stance_time_percent',
                'number': 78,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'avg_stance_time',
                'number': 79,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': 'ms'
            }, {
                'name': 'avg_fractional_cadence',
                'number': 80,
                'type': 'uint8',
                'scale': 128,
                'offset': 0,
                'units': 'rpm'
            }, {
                'name': 'max_fractional_cadence',
                'number': 81,
                'type': 'uint8',
                'scale': 128,
                'offset': 0,
                'units': 'rpm'
            }, {
                'name': 'total_fractional_cycles',
                'number': 82,
                'type': 'uint8',
                'scale': 128,
                'offset': 0,
                'units': 'cycles'
            }, {
                'name': 'player_score',
                'number': 83,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'avg_total_hemoglobin_conc',
                'number': 84,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'g/dL'
            }, {
                'name': 'min_total_hemoglobin_conc',
                'number': 85,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'g/dL'
            }, {
                'name': 'max_total_hemoglobin_conc',
                'number': 86,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'g/dL'
            }, {
                'name': 'avg_saturated_hemoglobin_percent',
                'number': 87,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'min_saturated_hemoglobin_percent',
                'number': 88,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'max_saturated_hemoglobin_percent',
                'number': 89,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'avg_left_torque_effectiveness',
                'number': 91,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'avg_right_torque_effectiveness',
                'number': 92,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'avg_left_pedal_smoothness',
                'number': 93,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'avg_right_pedal_smoothness',
                'number': 94,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'avg_combined_pedal_smoothness',
                'number': 95,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'time_standing',
                'number': 98,
                'type': 'uint32',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'stand_count',
                'number': 99,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'avg_left_pco',
                'number': 100,
                'type': 'sint8',
                'scale': null,
                'offset': 0,
                'units': 'mm'
            }, {
                'name': 'avg_right_pco',
                'number': 101,
                'type': 'sint8',
                'scale': null,
                'offset': 0,
                'units': 'mm'
            }, {
                'name': 'avg_left_power_phase',
                'number': 102,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'degrees'
            }, {
                'name': 'avg_left_power_phase_peak',
                'number': 103,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'degrees'
            }, {
                'name': 'avg_right_power_phase',
                'number': 104,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'degrees'
            }, {
                'name': 'avg_right_power_phase_peak',
                'number': 105,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'degrees'
            }, {
                'name': 'avg_power_position',
                'number': 106,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'max_power_position',
                'number': 107,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'avg_cadence_position',
                'number': 108,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'rpm'
            }, {
                'name': 'max_cadence_position',
                'number': 109,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'rpm'
            }, {
                'name': 'enhanced_avg_speed',
                'number': 110,
                'type': 'uint32',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'enhanced_max_speed',
                'number': 111,
                'type': 'uint32',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'enhanced_avg_altitude',
                'number': 112,
                'type': 'uint32',
                'scale': 5,
                'offset': -500,
                'units': 'm'
            }, {
                'name': 'enhanced_min_altitude',
                'number': 113,
                'type': 'uint32',
                'scale': 5,
                'offset': -500,
                'units': 'm'
            }, {
                'name': 'enhanced_max_altitude',
                'number': 114,
                'type': 'uint32',
                'scale': 5,
                'offset': -500,
                'units': 'm'
            }, {
                'name': 'avg_lev_motor_power',
                'number': 115,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'max_lev_motor_power',
                'number': 116,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'lev_battery_consumption',
                'number': 117,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'avg_vertical_ratio',
                'number': 118,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'avg_stance_time_balance',
                'number': 119,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'avg_step_length',
                'number': 120,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': 'mm'
            }, {
                'name': 'avg_vam',
                'number': 121,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'timestamp',
                'number': 253,
                'type': 'date_time',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'record': {
        'num': 20,
        'fields': [{
                'name': 'position_lat',
                'number': 0,
                'type': 'sint32',
                'scale': null,
                'offset': 0,
                'units': 'semicircles'
            }, {
                'name': 'position_long',
                'number': 1,
                'type': 'sint32',
                'scale': null,
                'offset': 0,
                'units': 'semicircles'
            }, {
                'name': 'altitude',
                'number': 2,
                'type': 'uint16',
                'scale': 5,
                'offset': -500,
                'units': 'm'
            }, {
                'name': 'heart_rate',
                'number': 3,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'bpm'
            }, {
                'name': 'cadence',
                'number': 4,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'rpm'
            }, {
                'name': 'distance',
                'number': 5,
                'type': 'uint32',
                'scale': 100,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'speed',
                'number': 6,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'power',
                'number': 7,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'compressed_speed_distance',
                'number': 8,
                'type': 'byte',
                'scale': 100,
                'offset': 0,
                'units': 'm/s,m'
            }, {
                'name': 'grade',
                'number': 9,
                'type': 'sint16',
                'scale': 100,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'resistance',
                'number': 10,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'time_from_course',
                'number': 11,
                'type': 'sint32',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'cycle_length',
                'number': 12,
                'type': 'uint8',
                'scale': 100,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'temperature',
                'number': 13,
                'type': 'sint8',
                'scale': null,
                'offset': 0,
                'units': 'C'
            }, {
                'name': 'speed_1s',
                'number': 17,
                'type': 'uint8',
                'scale': 16,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'cycles',
                'number': 18,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'cycles'
            }, {
                'name': 'total_cycles',
                'number': 19,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 'cycles'
            }, {
                'name': 'compressed_accumulated_power',
                'number': 28,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'accumulated_power',
                'number': 29,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'left_right_balance',
                'number': 30,
                'type': 'left_right_balance',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'gps_accuracy',
                'number': 31,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'vertical_speed',
                'number': 32,
                'type': 'sint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'calories',
                'number': 33,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'kcal'
            }, {
                'name': 'vertical_oscillation',
                'number': 39,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': 'mm'
            }, {
                'name': 'stance_time_percent',
                'number': 40,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'stance_time',
                'number': 41,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': 'ms'
            }, {
                'name': 'activity_type',
                'number': 42,
                'type': 'activity_type',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'left_torque_effectiveness',
                'number': 43,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'right_torque_effectiveness',
                'number': 44,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'left_pedal_smoothness',
                'number': 45,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'right_pedal_smoothness',
                'number': 46,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'combined_pedal_smoothness',
                'number': 47,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'time128',
                'number': 48,
                'type': 'uint8',
                'scale': 128,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'stroke_type',
                'number': 49,
                'type': 'stroke_type',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'zone',
                'number': 50,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'ball_speed',
                'number': 51,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'cadence256',
                'number': 52,
                'type': 'uint16',
                'scale': 256,
                'offset': 0,
                'units': 'rpm'
            }, {
                'name': 'fractional_cadence',
                'number': 53,
                'type': 'uint8',
                'scale': 128,
                'offset': 0,
                'units': 'rpm'
            }, {
                'name': 'total_hemoglobin_conc',
                'number': 54,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'g/dL'
            }, {
                'name': 'total_hemoglobin_conc_min',
                'number': 55,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'g/dL'
            }, {
                'name': 'total_hemoglobin_conc_max',
                'number': 56,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'g/dL'
            }, {
                'name': 'saturated_hemoglobin_percent',
                'number': 57,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'saturated_hemoglobin_percent_min',
                'number': 58,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'saturated_hemoglobin_percent_max',
                'number': 59,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'device_index',
                'number': 62,
                'type': 'device_index',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'left_pco',
                'number': 67,
                'type': 'sint8',
                'scale': null,
                'offset': 0,
                'units': 'mm'
            }, {
                'name': 'right_pco',
                'number': 68,
                'type': 'sint8',
                'scale': null,
                'offset': 0,
                'units': 'mm'
            }, {
                'name': 'left_power_phase',
                'number': 69,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'degrees'
            }, {
                'name': 'left_power_phase_peak',
                'number': 70,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'degrees'
            }, {
                'name': 'right_power_phase',
                'number': 71,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'degrees'
            }, {
                'name': 'right_power_phase_peak',
                'number': 72,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'degrees'
            }, {
                'name': 'enhanced_speed',
                'number': 73,
                'type': 'uint32',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'enhanced_altitude',
                'number': 78,
                'type': 'uint32',
                'scale': 5,
                'offset': -500,
                'units': 'm'
            }, {
                'name': 'battery_soc',
                'number': 81,
                'type': 'uint8',
                'scale': 2,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'motor_power',
                'number': 82,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'watts'
            }, {
                'name': 'vertical_ratio',
                'number': 83,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'stance_time_balance',
                'number': 84,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'step_length',
                'number': 85,
                'type': 'uint16',
                'scale': 10,
                'offset': 0,
                'units': 'mm'
            }, {
                'name': 'absolute_pressure',
                'number': 91,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 'Pa'
            }, {
                'name': 'depth',
                'number': 92,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'next_stop_depth',
                'number': 93,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'next_stop_time',
                'number': 94,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'time_to_surface',
                'number': 95,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'ndl_time',
                'number': 96,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'cns_load',
                'number': 97,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'n2_load',
                'number': 98,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'percent'
            }, { 'name': 'timestamp', 'number': 253, 'type': 'date_time', 'scale': null, 'offset': 0, 'units': 's' }]
    },
    'event': {
        'num': 21,
        'fields': [{
                'name': 'event',
                'number': 0,
                'type': 'event',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'event_type',
                'number': 1,
                'type': 'event_type',
                'scale': null,
                'offset': null,
                'units': ''
            }, { 'name': 'data16', 'number': 2, 'type': 'uint16', 'scale': null, 'offset': null, 'units': '' }, {
                'name': 'data',
                'number': 3,
                'type': 'uint32',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'event_group',
                'number': 4,
                'type': 'uint8',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'score',
                'number': 7,
                'type': 'uint16',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'opponent_score',
                'number': 8,
                'type': 'uint16',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'front_gear_num',
                'number': 9,
                'type': 'uint8z',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'front_gear',
                'number': 10,
                'type': 'uint8z',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'rear_gear_num',
                'number': 11,
                'type': 'uint8z',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'rear_gear',
                'number': 12,
                'type': 'uint8z',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'device_index',
                'number': 13,
                'type': 'device_index',
                'scale': null,
                'offset': null,
                'units': ''
            }, { 'name': 'timestamp', 'number': 253, 'type': 'date_time', 'scale': null, 'offset': null, 'units': 's' }]
    },
    'device_info': {
        'num': 23,
        'fields': [{
                'name': 'device_index',
                'number': 0,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'device_type',
                'number': 1,
                'type': 'antplus_device_type',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'manufacturer',
                'number': 2,
                'type': 'manufacturer',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'serial_number',
                'number': 3,
                'type': 'uint32z',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'product',
                'number': 4,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'software_version',
                'number': 5,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': ''
            }, {
                'name': 'hardware_version',
                'number': 6,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'cum_operating_time',
                'number': 7,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'battery_voltage',
                'number': 10,
                'type': 'uint16',
                'scale': 256,
                'offset': 0,
                'units': 'V'
            }, {
                'name': 'battery_status',
                'number': 11,
                'type': 'battery_status',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'sensor_position',
                'number': 18,
                'type': 'body_location',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'descriptor',
                'number': 19,
                'type': 'string',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'ant_transmission_type',
                'number': 20,
                'type': 'uint8z',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'ant_device_number',
                'number': 21,
                'type': 'uint16z',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'ant_network',
                'number': 22,
                'type': 'ant_network',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'source_type',
                'number': 25,
                'type': 'source_type',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'product_name',
                'number': 27,
                'type': 'string',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'timestamp', 'number': 253, 'type': 'date_time', 'scale': null, 'offset': 0, 'units': 's' }]
    },
    'workout': {
        'num': 26,
        'fields': [{
                'name': 'sport',
                'number': 4,
                'type': 'sport',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'capabilities',
                'number': 5,
                'type': 'workout_capabilities',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'num_valid_steps',
                'number': 6,
                'type': 'uint16',
                'scale': null,
                'offset': null,
                'units': ''
            }, { 'name': 'wkt_name', 'number': 8, 'type': 'string', 'scale': null, 'offset': null, 'units': '' }]
    },
    'workout_step': {
        'num': 27,
        'fields': [{
                'name': 'wkt_step_name',
                'number': 0,
                'type': 'string',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'duration_type',
                'number': 1,
                'type': 'wkt_step_duration',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'duration_value',
                'number': 2,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'target_type',
                'number': 3,
                'type': 'wkt_step_target',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'target_value',
                'number': 4,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'custom_target_value_low',
                'number': 5,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'custom_target_value_high',
                'number': 6,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'intensity',
                'number': 7,
                'type': 'intensity',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'weight_scale': {
        'num': 30,
        'fields': [{
                'name': 'weight',
                'number': 0,
                'type': 'weight',
                'scale': 100,
                'offset': 0,
                'units': 'kg'
            }, {
                'name': 'percent_fat',
                'number': 1,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'percent_hydration',
                'number': 2,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': '%'
            }, {
                'name': 'visceral_fat_mass',
                'number': 3,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'kg'
            }, {
                'name': 'bone_mass',
                'number': 4,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'kg'
            }, {
                'name': 'muscle_mass',
                'number': 5,
                'type': 'uint16',
                'scale': 100,
                'offset': 0,
                'units': 'kg'
            }, {
                'name': 'basal_met',
                'number': 7,
                'type': 'uint16',
                'scale': 4,
                'offset': 0,
                'units': 'kcal/day'
            }, {
                'name': 'physique_rating',
                'number': 8,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'active_met',
                'number': 9,
                'type': 'uint16',
                'scale': 4,
                'offset': 0,
                'units': 'kcal/day'
            }, {
                'name': 'metabolic_age',
                'number': 10,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'years'
            }, {
                'name': 'visceral_fat_rating',
                'number': 11,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'user_profile_index',
                'number': 12,
                'type': 'message_index',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'timestamp', 'number': 253, 'type': 'date_time', 'scale': null, 'offset': 0, 'units': 's' }]
    },
    'course': {
        'num': 31,
        'fields': [{
                'name': 'sport',
                'number': 4,
                'type': 'sport',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'name',
                'number': 5,
                'type': 'string',
                'scale': null,
                'offset': null,
                'units': ''
            }, { 'name': 'capabilities', 'number': 6, 'type': 'course_capabilities', 'scale': null, 'offset': null, 'units': '' }]
    },
    'course_point': {
        'num': 32,
        'fields': [{
                'name': 'timestamp',
                'number': 1,
                'type': 'date_time',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'position_lat',
                'number': 2,
                'type': 'sint32',
                'scale': null,
                'offset': 0,
                'units': 'semicircles'
            }, {
                'name': 'position_long',
                'number': 3,
                'type': 'sint32',
                'scale': null,
                'offset': 0,
                'units': 'semicircles'
            }, { 'name': 'distance', 'number': 4, 'type': 'uint32', 'scale': 100, 'offset': 0, 'units': 'm' }, {
                'name': 'type',
                'number': 5,
                'type': 'course_point',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'name', 'number': 6, 'type': 'string', 'scale': null, 'offset': 0, 'units': '' }, {
                'name': 'favorite',
                'number': 8,
                'type': 'bool',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'totals': {
        'num': 33,
        'fields': [{
                'name': 'timer_time',
                'number': 0,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'distance',
                'number': 1,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'calories',
                'number': 2,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 'kcal'
            }, {
                'name': 'sport',
                'number': 3,
                'type': 'sport',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'elapsed_time',
                'number': 4,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'sessions',
                'number': 5,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'active_time',
                'number': 6,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'sport_index',
                'number': 9,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'timestamp',
                'number': 253,
                'type': 'date_time',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'activity': {
        'num': 34,
        'fields': [{
                'name': 'total_timer_time',
                'number': 0,
                'type': 'uint32',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'num_sessions',
                'number': 1,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'type', 'number': 2, 'type': 'activity', 'scale': null, 'offset': 0, 'units': '' }, {
                'name': 'event',
                'number': 3,
                'type': 'event',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'event_type',
                'number': 4,
                'type': 'event_type',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'local_timestamp',
                'number': 5,
                'type': 'local_date_time',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'event_group',
                'number': 6,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'timestamp', 'number': 253, 'type': 'date_time', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'software': {
        'num': 35,
        'fields': [{
                'name': 'version',
                'number': 3,
                'type': 'uint16',
                'scale': 100,
                'offset': null,
                'units': ''
            }, {
                'name': 'part_number',
                'number': 5,
                'type': 'string',
                'scale': null,
                'offset': null,
                'units': ''
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': null, 'units': '' }]
    },
    'file_capabilities': {
        'num': 37,
        'fields': [{
                'name': 'type',
                'number': 0,
                'type': 'file',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'flags',
                'number': 1,
                'type': 'file_flags',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'directory',
                'number': 2,
                'type': 'string',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'max_count',
                'number': 3,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'max_size',
                'number': 4,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 'bytes'
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'mesg_capabilities': {
        'num': 38,
        'fields': [{
                'name': 'file',
                'number': 0,
                'type': 'file',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'mesg_num',
                'number': 1,
                'type': 'mesg_num',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'count_type',
                'number': 2,
                'type': 'mesg_count',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'count',
                'number': 3,
                'type': 'uint16',
                'scale': null,
                'offset': null,
                'units': ''
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': null, 'units': '' }]
    },
    'field_capabilities': {
        'num': 39,
        'fields': [{
                'name': 'file',
                'number': 0,
                'type': 'file',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'mesg_num',
                'number': 1,
                'type': 'mesg_num',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'field_num',
                'number': 2,
                'type': 'uint8',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'count',
                'number': 3,
                'type': 'uint16',
                'scale': null,
                'offset': null,
                'units': ''
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': null, 'units': '' }]
    },
    'file_creator': {
        'num': 49,
        'fields': [{
                'name': 'software_version',
                'number': 0,
                'type': 'uint16',
                'scale': null,
                'offset': null,
                'units': ''
            }, { 'name': 'hardware_version', 'number': 1, 'type': 'uint8', 'scale': null, 'offset': null, 'units': '' }]
    },
    'blood_pressure': {
        'num': 51,
        'fields': [{
                'name': 'systolic_pressure',
                'number': 0,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'mmHg'
            }, {
                'name': 'diastolic_pressure',
                'number': 1,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'mmHg'
            }, {
                'name': 'mean_arterial_pressure',
                'number': 2,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'mmHg'
            }, {
                'name': 'map_3_sample_mean',
                'number': 3,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'mmHg'
            }, {
                'name': 'map_morning_values',
                'number': 4,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'mmHg'
            }, {
                'name': 'map_evening_values',
                'number': 5,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'mmHg'
            }, {
                'name': 'heart_rate',
                'number': 6,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'bpm'
            }, {
                'name': 'heart_rate_type',
                'number': 7,
                'type': 'hr_type',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'status',
                'number': 8,
                'type': 'bp_status',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'user_profile_index',
                'number': 9,
                'type': 'message_index',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'timestamp', 'number': 253, 'type': 'date_time', 'scale': null, 'offset': 0, 'units': 's' }]
    },
    'monitoring': {
        'num': 55,
        'fields': [{
                'name': 'device_index',
                'number': 0,
                'type': 'device_index',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'calories',
                'number': 1,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'kcal'
            }, {
                'name': 'distance',
                'number': 2,
                'type': 'float32',
                'scale': null,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'cycles',
                'number': 3,
                'type': 'float32',
                'scale': null,
                'offset': 0,
                'units': 'cycles'
            }, {
                'name': 'active_time',
                'number': 4,
                'type': 'float32',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'activity_type',
                'number': 5,
                'type': 'activity_type',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'activity_subtype',
                'number': 6,
                'type': 'activity_subtype',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'activity_level',
                'number': 7,
                'type': 'activity_level',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'distance16',
                'number': 8,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'cycles16',
                'number': 9,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'cycles'
            }, {
                'name': 'active_time16',
                'number': 10,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'local_timestamp',
                'number': 11,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'temperature',
                'number': 12,
                'type': 'float32',
                'scale': null,
                'offset': 0,
                'units': 'C'
            }, {
                'name': 'temperature_min',
                'number': 14,
                'type': 'float32',
                'scale': null,
                'offset': 0,
                'units': 'C'
            }, {
                'name': 'temperature_max',
                'number': 15,
                'type': 'float32',
                'scale': null,
                'offset': 0,
                'units': 'C'
            }, {
                'name': 'activity_time',
                'number': 16,
                'type': 'int32',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'active_calories',
                'number': 19,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'kcal'
            }, {
                'name': 'current_activity_type_intensity',
                'number': 24,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'timestamp_min8',
                'number': 25,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'timestamp16',
                'number': 26,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'heart_rate',
                'number': 27,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'bpm'
            }, {
                'name': 'intensity',
                'number': 28,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'duration_min',
                'number': 29,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'duration',
                'number': 30,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'ascent',
                'number': 31,
                'type': 'float32',
                'scale': null,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'descent',
                'number': 32,
                'type': 'float32',
                'scale': null,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'moderate_activity_minutes',
                'number': 33,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'vigorous_activity_inutes',
                'number': 34,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'timestamp', 'number': 253, 'type': 'uint32', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'hrv': {
        'num': 78,
        'fields': [{ 'name': 'time', 'number': 0, 'type': 'uint16_array', 'scale': 1000, 'offset': 0, 'units': 's' }]
    },
    'length': {
        'num': 101,
        'fields': [{
                'name': 'event',
                'number': 0,
                'type': 'event',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'event_type',
                'number': 1,
                'type': 'event_type',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'start_time',
                'number': 2,
                'type': 'date_time',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'total_elapsed_time',
                'number': 3,
                'type': 'uint32',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'total_timer_time',
                'number': 4,
                'type': 'uint32',
                'scale': 1000,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'total_strokes',
                'number': 5,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'strokes'
            }, {
                'name': 'avg_speed',
                'number': 6,
                'type': 'uint16',
                'scale': 1000,
                'offset': 0,
                'units': 'm/s'
            }, {
                'name': 'swim_stroke',
                'number': 7,
                'type': 'swim_stroke',
                'scale': null,
                'offset': 0,
                'units': 'swim_stroke'
            }, {
                'name': 'avg_swimming_cadence',
                'number': 9,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'strokes/min'
            }, {
                'name': 'event_group',
                'number': 10,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'total_calories',
                'number': 11,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'kcal'
            }, {
                'name': 'length_type',
                'number': 12,
                'type': 'length_type',
                'scale': null,
                'offset': 0,
                'units': 'length_type'
            }, {
                'name': 'player_score',
                'number': 18,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'opponent_score',
                'number': 19,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'stroke_count',
                'number': 20,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'counts'
            }, {
                'name': 'zone_count',
                'number': 21,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'counts'
            }, {
                'name': 'timestamp',
                'number': 253,
                'type': 'date_time',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'monitoring_info': {
        'num': 103,
        'fields': [{
                'name': 'local_timestamp',
                'number': 0,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'activity_type',
                'number': 1,
                'type': 'activity_type',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'cycles_to_distance',
                'number': 3,
                'type': 'float32',
                'scale': null,
                'offset': 0,
                'units': 'cycles'
            }, {
                'name': 'cycles_to_calories',
                'number': 4,
                'type': 'float32',
                'scale': null,
                'offset': 0,
                'units': 'kcal'
            }, {
                'name': 'resting_metabolic_rate',
                'number': 5,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'timestamp', 'number': 253, 'type': 'date_time', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'o_hr_settings': {
        'num': 108,
        'fields': [{
                'name': 'enabled',
                'number': 0,
                'type': 'byte',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'timestamp', 'number': 253, 'type': 'date_time', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'field_description': {
        'num': 206,
        'fields': [{
                'name': 'developer_data_index',
                'number': 0,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'field_definition_number',
                'number': 1,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'fit_base_type_id',
                'number': 2,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'field_name',
                'number': 3,
                'type': 'string',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'scale', 'number': 6, 'type': 'uint8', 'scale': null, 'offset': 0, 'units': '' }, {
                'name': 'offset',
                'number': 7,
                'type': 'sint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'units',
                'number': 8,
                'type': 'string',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'native_field_num', 'number': 15, 'type': 'uint8', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'developer_data_id': {
        'num': 207,
        'fields': [{
                'name': 'developer_id',
                'number': 0,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'application_id',
                'number': 1,
                'type': 'byte_array',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'manufacturer_id',
                'number': 2,
                'type': 'manufacturer',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'developer_data_index',
                'number': 3,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'application_version', 'number': 4, 'type': 'uint8', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'stress_level': {
        'num': 227,
        'fields': [{
                'name': 'stress_level_value',
                'number': 0,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'stress_level_time',
                'number': 1,
                'type': 'date_time',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'field_two',
                'number': 2,
                'type': 'sint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'body_battery',
                'number': 3,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'field_four', 'number': 4, 'type': 'uint8', 'scale': null, 'offset': 0, 'units': '' }]
    },
    'dive_settings': {
        'num': 258,
        'fields': [{
                'name': 'name',
                'number': 0,
                'type': 'string',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'model',
                'number': 1,
                'type': 'tissue_model_type',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'gf_low',
                'number': 2,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'gf_high',
                'number': 3,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'water_type',
                'number': 4,
                'type': 'water_type',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'water_density',
                'number': 5,
                'type': 'float32',
                'scale': null,
                'offset': 0,
                'units': 'kg/m^3'
            }, {
                'name': 'po2_warn',
                'number': 6,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'po2_critical',
                'number': 7,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'po2_deco',
                'number': 8,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'safety_stop_enabled',
                'number': 9,
                'type': 'bool',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'bottom_depth',
                'number': 10,
                'type': 'float32',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'bottom_time',
                'number': 11,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'apnea_countdown_enabled',
                'number': 12,
                'type': 'bool',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'apnea_countdown_time',
                'number': 13,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'backlight_mode',
                'number': 14,
                'type': 'dive_backlight_mode',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'backlight_brightness',
                'number': 15,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'backlight_timeout',
                'number': 16,
                'type': 'backlight_timeout',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'repeat_dive_time',
                'number': 17,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'safety_stop_time',
                'number': 18,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'heart_rate_source_type',
                'number': 19,
                'type': 'source_type',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'heart_rate_source',
                'number': 20,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': ''
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': null, 'units': '' }]
    },
    'dive_gas': {
        'num': 259,
        'fields': [{
                'name': 'helium_content',
                'number': 0,
                'type': 'uint8',
                'scale': null,
                'offset': null,
                'units': 'percent'
            }, {
                'name': 'oxygen_content',
                'number': 1,
                'type': 'uint8',
                'scale': null,
                'offset': null,
                'units': 'percent'
            }, {
                'name': 'status',
                'number': 2,
                'type': 'dive_gas_status',
                'scale': null,
                'offset': null,
                'units': ''
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': null, 'units': '' }]
    },
    'dive_alarm': {
        'num': 262,
        'fields': [{
                'name': 'depth',
                'number': 0,
                'type': 'uint32',
                'scale': null,
                'offset': null,
                'units': 'm'
            }, {
                'name': 'time',
                'number': 1,
                'type': 'sint32',
                'scale': null,
                'offset': null,
                'units': 's'
            }, {
                'name': 'enabled',
                'number': 2,
                'type': 'bool',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'alarm_type',
                'number': 3,
                'type': 'dive_alarm_type',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'sound',
                'number': 4,
                'type': 'tone',
                'scale': null,
                'offset': null,
                'units': ''
            }, {
                'name': 'dive_types',
                'number': 5,
                'type': 'sub_sport',
                'scale': null,
                'offset': null,
                'units': ''
            }, { 'name': 'message_index', 'number': 254, 'type': 'message_index', 'scale': null, 'offset': null, 'units': '' }]
    },
    'dive_summary': {
        'num': 268,
        'fields': [{
                'name': 'reference_mesg',
                'number': 0,
                'type': 'mesg_num',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'reference_index',
                'number': 1,
                'type': 'message_index',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'avg_depth',
                'number': 2,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'max_depth',
                'number': 3,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 'm'
            }, {
                'name': 'surface_interval',
                'number': 4,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, {
                'name': 'start_cns',
                'number': 5,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'end_cns',
                'number': 6,
                'type': 'uint8',
                'scale': null,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'start_n2',
                'number': 7,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'end_n2',
                'number': 8,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'percent'
            }, {
                'name': 'o2_toxicity',
                'number': 9,
                'type': 'uint16',
                'scale': null,
                'offset': 0,
                'units': 'OTUs'
            }, {
                'name': 'dive_number',
                'number': 10,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': ''
            }, {
                'name': 'bottom_time',
                'number': 11,
                'type': 'uint32',
                'scale': null,
                'offset': 0,
                'units': 's'
            }, { 'name': 'timestamp', 'number': 253, 'type': 'date_time', 'scale': null, 'offset': 0, 'units': 's' }]
    }
};

var typeMaps = {
    'file': {
        'device': 1,
        'settings': 2,
        'sport': 3,
        'activity': 4,
        'workout': 5,
        'course': 6,
        'schedules': 7,
        'weight': 9,
        'totals': 10,
        'goals': 11,
        'blood_pressure': 14,
        'monitoring_a': 15,
        'activity_summary': 20,
        'monitoring_daily': 28,
        'monitoring_b': 32,
        'segment': 34,
        'segment_list': 35,
        'exd_configuration': 40,
        'mfg_range_min': 247,
        'mfg_range_max': 254
    },
    'mesg_num': {
        'file_id': 0,
        'capabilities': 1,
        'device_settings': 2,
        'user_profile': 3,
        'hrm_profile': 4,
        'sdm_profile': 5,
        'bike_profile': 6,
        'zones_target': 7,
        'hr_zone': 8,
        'power_zone': 9,
        'met_zone': 10,
        'sport': 12,
        'goal': 15,
        'session': 18,
        'lap': 19,
        'record': 20,
        'event': 21,
        'device_info': 23,
        'workout': 26,
        'workout_step': 27,
        'schedule': 28,
        'weight_scale': 30,
        'course': 31,
        'course_point': 32,
        'totals': 33,
        'activity': 34,
        'software': 35,
        'file_capabilities': 37,
        'mesg_capabilities': 38,
        'field_capabilities': 39,
        'file_creator': 49,
        'blood_pressure': 51,
        'speed_zone': 53,
        'monitoring': 55,
        'training_file': 72,
        'hrv': 78,
        'ant_rx': 80,
        'ant_tx': 81,
        'ant_channel_id': 82,
        'length': 101,
        'monitoring_info': 103,
        'pad': 105,
        'slave_device': 106,
        'connectivity': 127,
        'weather_conditions': 128,
        'weather_alert': 129,
        'cadence_zone': 131,
        'hr': 132,
        'segment_lap': 142,
        'memo_glob': 145,
        'segment_id': 148,
        'segment_leaderboard_entry': 149,
        'segment_point': 150,
        'segment_file': 151,
        'workout_session': 158,
        'watchface_settings': 159,
        'gps_metadata': 160,
        'camera_event': 161,
        'timestamp_correlation': 162,
        'gyroscope_data': 164,
        'accelerometer_data': 165,
        'three_d_sensor_calibration': 167,
        'video_frame': 169,
        'obdii_data': 174,
        'nmea_sentence': 177,
        'aviation_attitude': 178,
        'video': 184,
        'video_title': 185,
        'video_description': 186,
        'video_clip': 187,
        'exd_screen_configuration': 200,
        'exd_data_field_configuration': 201,
        'exd_data_concept_configuration': 202,
        'field_description': 206,
        'developer_data_id': 207,
        'magnetometer_data': 208,
        'barometer_data': 209,
        'one_d_sensor_calibration': 210,
        'set': 225,
        'stress_level': 227,
        'dive_settings': 258,
        'dive_gas': 259,
        'dive_alarm': 262,
        'exercise_title': 264,
        'dive_summary': 268,
        'jump': 285,
        'climb_pro': 317,
        'mfg_range_min': 65280,
        'mfg_range_max': 65534
    },
    'checksum': { 'clear': 0, 'ok': 1 },
    'file_flags': { '0': 0, 'read': 2, 'write': 4, 'erase': 8 },
    'mesg_count': { 'num_per_file': 0, 'max_per_file': 1, 'max_per_file_type': 2 },
    'date_time': { '0': 0, 'min': 268435456 },
    'local_date_time': { '0': 0, 'min': 268435456 },
    'message_index': { '0': 0, 'mask': 4095, 'reserved': 28672, 'selected': 32768 },
    'gender': { 'female': 0, 'male': 1 },
    'language': {
        'english': 0,
        'french': 1,
        'italian': 2,
        'german': 3,
        'spanish': 4,
        'croatian': 5,
        'czech': 6,
        'danish': 7,
        'dutch': 8,
        'finnish': 9,
        'greek': 10,
        'hungarian': 11,
        'norwegian': 12,
        'polish': 13,
        'portuguese': 14,
        'slovakian': 15,
        'slovenian': 16,
        'swedish': 17,
        'russian': 18,
        'turkish': 19,
        'latvian': 20,
        'ukrainian': 21,
        'arabic': 22,
        'farsi': 23,
        'bulgarian': 24,
        'romanian': 25,
        'chinese': 26,
        'japanese': 27,
        'korean': 28,
        'taiwanese': 29,
        'thai': 30,
        'hebrew': 31,
        'brazilian_portuguese': 32,
        'indonesian': 33,
        'malaysian': 34,
        'vietnamese': 35,
        'burmese': 36,
        'mongolian': 37,
        'custom': 254
    },
    'language_bits_0': {
        '0': 0,
        'english': 1,
        'french': 2,
        'italian': 4,
        'german': 8,
        'spanish': 16,
        'croatian': 32,
        'czech': 64,
        'danish': 128
    },
    'language_bits_1': {
        '0': 0,
        'dutch': 1,
        'finnish': 2,
        'greek': 4,
        'hungarian': 8,
        'norwegian': 16,
        'polish': 32,
        'portuguese': 64,
        'slovakian': 128
    },
    'language_bits_2': {
        '0': 0,
        'slovenian': 1,
        'swedish': 2,
        'russian': 4,
        'turkish': 8,
        'latvian': 16,
        'ukrainian': 32,
        'arabic': 64,
        'farsi': 128
    },
    'language_bits_3': {
        '0': 0,
        'bulgarian': 1,
        'romanian': 2,
        'chinese': 4,
        'japanese': 8,
        'korean': 16,
        'taiwanese': 32,
        'thai': 64,
        'hebrew': 128
    },
    'language_bits_4': {
        '0': 0,
        'brazilian_portuguese': 1,
        'indonesian': 2,
        'malaysian': 4,
        'vietnamese': 8,
        'burmese': 16,
        'mongolian': 32
    },
    'time_zone': {
        'almaty': 0,
        'bangkok': 1,
        'bombay': 2,
        'brasilia': 3,
        'cairo': 4,
        'cape_verde_is': 5,
        'darwin': 6,
        'eniwetok': 7,
        'fiji': 8,
        'hong_kong': 9,
        'islamabad': 10,
        'kabul': 11,
        'magadan': 12,
        'mid_atlantic': 13,
        'moscow': 14,
        'muscat': 15,
        'newfoundland': 16,
        'samoa': 17,
        'sydney': 18,
        'tehran': 19,
        'tokyo': 20,
        'us_alaska': 21,
        'us_atlantic': 22,
        'us_central': 23,
        'us_eastern': 24,
        'us_hawaii': 25,
        'us_mountain': 26,
        'us_pacific': 27,
        'other': 28,
        'auckland': 29,
        'kathmandu': 30,
        'europe_western_wet': 31,
        'europe_central_cet': 32,
        'europe_eastern_eet': 33,
        'jakarta': 34,
        'perth': 35,
        'adelaide': 36,
        'brisbane': 37,
        'tasmania': 38,
        'iceland': 39,
        'amsterdam': 40,
        'athens': 41,
        'barcelona': 42,
        'berlin': 43,
        'brussels': 44,
        'budapest': 45,
        'copenhagen': 46,
        'dublin': 47,
        'helsinki': 48,
        'lisbon': 49,
        'london': 50,
        'madrid': 51,
        'munich': 52,
        'oslo': 53,
        'paris': 54,
        'prague': 55,
        'reykjavik': 56,
        'rome': 57,
        'stockholm': 58,
        'vienna': 59,
        'warsaw': 60,
        'zurich': 61,
        'quebec': 62,
        'ontario': 63,
        'manitoba': 64,
        'saskatchewan': 65,
        'alberta': 66,
        'british_columbia': 67,
        'boise': 68,
        'boston': 69,
        'chicago': 70,
        'dallas': 71,
        'denver': 72,
        'kansas_city': 73,
        'las_vegas': 74,
        'los_angeles': 75,
        'miami': 76,
        'minneapolis': 77,
        'new_york': 78,
        'new_orleans': 79,
        'phoenix': 80,
        'santa_fe': 81,
        'seattle': 82,
        'washington_dc': 83,
        'us_arizona': 84,
        'chita': 85,
        'ekaterinburg': 86,
        'irkutsk': 87,
        'kaliningrad': 88,
        'krasnoyarsk': 89,
        'novosibirsk': 90,
        'petropavlovsk_kamchatskiy': 91,
        'samara': 92,
        'vladivostok': 93,
        'mexico_central': 94,
        'mexico_mountain': 95,
        'mexico_pacific': 96,
        'cape_town': 97,
        'winkhoek': 98,
        'lagos': 99,
        'riyahd': 100,
        'venezuela': 101,
        'australia_lh': 102,
        'santiago': 103,
        'manual': 253,
        'automatic': 254
    },
    'display_measure': { 'metric': 0, 'statute': 1, 'nautical': 2 },
    'display_heart': { 'bpm': 0, 'max': 1, 'reserve': 2 },
    'display_power': { 'watts': 0, 'percent_ftp': 1 },
    'display_position': {
        'degree': 0,
        'degree_minute': 1,
        'degree_minute_second': 2,
        'austrian_grid': 3,
        'british_grid': 4,
        'dutch_grid': 5,
        'hungarian_grid': 6,
        'finnish_grid': 7,
        'german_grid': 8,
        'icelandic_grid': 9,
        'indonesian_equatorial': 10,
        'indonesian_irian': 11,
        'indonesian_southern': 12,
        'india_zone_0': 13,
        'india_zone_IA': 14,
        'india_zone_IB': 15,
        'india_zone_IIA': 16,
        'india_zone_IIB': 17,
        'india_zone_IIIA': 18,
        'india_zone_IIIB': 19,
        'india_zone_IVA': 20,
        'india_zone_IVB': 21,
        'irish_transverse': 22,
        'irish_grid': 23,
        'loran': 24,
        'maidenhead_grid': 25,
        'mgrs_grid': 26,
        'new_zealand_grid': 27,
        'new_zealand_transverse': 28,
        'qatar_grid': 29,
        'modified_swedish_grid': 30,
        'swedish_grid': 31,
        'south_african_grid': 32,
        'swiss_grid': 33,
        'taiwan_grid': 34,
        'united_states_grid': 35,
        'utm_ups_grid': 36,
        'west_malayan': 37,
        'borneo_rso': 38,
        'estonian_grid': 39,
        'latvian_grid': 40,
        'swedish_ref_99_grid': 41
    },
    'switch': { 'off': 0, 'on': 1, 'auto': 2 },
    'sport': {
        'generic': 0,
        'running': 1,
        'cycling': 2,
        'transition': 3,
        'fitness_equipment': 4,
        'swimming': 5,
        'basketball': 6,
        'soccer': 7,
        'tennis': 8,
        'american_football': 9,
        'training': 10,
        'walking': 11,
        'cross_country_skiing': 12,
        'alpine_skiing': 13,
        'snowboarding': 14,
        'rowing': 15,
        'mountaineering': 16,
        'hiking': 17,
        'multisport': 18,
        'paddling': 19,
        'flying': 20,
        'e_biking': 21,
        'motorcycling': 22,
        'boating': 23,
        'driving': 24,
        'golf': 25,
        'hang_gliding': 26,
        'horseback_riding': 27,
        'hunting': 28,
        'fishing': 29,
        'inline_skating': 30,
        'rock_climbing': 31,
        'sailing': 32,
        'ice_skating': 33,
        'sky_diving': 34,
        'snowshoeing': 35,
        'snowmobiling': 36,
        'stand_up_paddleboarding': 37,
        'surfing': 38,
        'wakeboarding': 39,
        'water_skiing': 40,
        'kayaking': 41,
        'rafting': 42,
        'windsurfing': 43,
        'kitesurfing': 44,
        'tactical': 45,
        'jumpmaster': 46,
        'boxing': 47,
        'floor_climbing': 48,
        'diving': 53,
        'all': 254
    },
    'sport_bits_0': {
        '0': 0,
        'generic': 1,
        'running': 2,
        'cycling': 4,
        'transition': 8,
        'fitness_equipment': 16,
        'swimming': 32,
        'basketball': 64,
        'soccer': 128
    },
    'sport_bits_1': {
        '0': 0,
        'tennis': 1,
        'american_football': 2,
        'training': 4,
        'walking': 8,
        'cross_country_skiing': 16,
        'alpine_skiing': 32,
        'snowboarding': 64,
        'rowing': 128
    },
    'sport_bits_2': {
        '0': 0,
        'mountaineering': 1,
        'hiking': 2,
        'multisport': 4,
        'paddling': 8,
        'flying': 16,
        'e_biking': 32,
        'motorcycling': 64,
        'boating': 128
    },
    'sport_bits_3': {
        '0': 0,
        'driving': 1,
        'golf': 2,
        'hang_gliding': 4,
        'horseback_riding': 8,
        'hunting': 16,
        'fishing': 32,
        'inline_skating': 64,
        'rock_climbing': 128
    },
    'sport_bits_4': {
        '0': 0,
        'sailing': 1,
        'ice_skating': 2,
        'sky_diving': 4,
        'snowshoeing': 8,
        'snowmobiling': 16,
        'stand_up_paddleboarding': 32,
        'surfing': 64,
        'wakeboarding': 128
    },
    'sport_bits_5': {
        '0': 0,
        'water_skiing': 1,
        'kayaking': 2,
        'rafting': 4,
        'windsurfing': 8,
        'kitesurfing': 16,
        'tactical': 32,
        'jumpmaster': 64,
        'boxing': 128
    },
    'sport_bits_6': { '0': 0, 'floor_climbing': 1 },
    'sub_sport': {
        'generic': 0,
        'treadmill': 1,
        'street': 2,
        'trail': 3,
        'track': 4,
        'spin': 5,
        'indoor_cycling': 6,
        'road': 7,
        'mountain': 8,
        'downhill': 9,
        'recumbent': 10,
        'cyclocross': 11,
        'hand_cycling': 12,
        'track_cycling': 13,
        'indoor_rowing': 14,
        'elliptical': 15,
        'stair_climbing': 16,
        'lap_swimming': 17,
        'open_water': 18,
        'flexibility_training': 19,
        'strength_training': 20,
        'warm_up': 21,
        'match': 22,
        'exercise': 23,
        'challenge': 24,
        'indoor_skiing': 25,
        'cardio_training': 26,
        'indoor_walking': 27,
        'e_bike_fitness': 28,
        'bmx': 29,
        'casual_walking': 30,
        'speed_walking': 31,
        'bike_to_run_transition': 32,
        'run_to_bike_transition': 33,
        'swim_to_bike_transition': 34,
        'atv': 35,
        'motocross': 36,
        'backcountry': 37,
        'resort': 38,
        'rc_drone': 39,
        'wingsuit': 40,
        'whitewater': 41,
        'skate_skiing': 42,
        'yoga': 43,
        'pilates': 44,
        'indoor_running': 45,
        'gravel_cycling': 46,
        'e_bike_mountain': 47,
        'commuting': 48,
        'mixed_surface': 49,
        'navigate': 50,
        'track_me': 51,
        'map': 52,
        'single_gas_diving': 53,
        'multi_gas_diving': 54,
        'gauge_diving': 55,
        'apnea_diving': 56,
        'apnea_hunting': 57,
        'virtual_activity': 58,
        'obstacle': 59,
        'all': 254
    },
    'sport_event': {
        'uncategorized': 0,
        'geocaching': 1,
        'fitness': 2,
        'recreation': 3,
        'race': 4,
        'special_event': 5,
        'training': 6,
        'transportation': 7,
        'touring': 8
    },
    'activity': { 'manual': 0, 'auto_multi_sport': 1 },
    'intensity': { 'active': 0, 'rest': 1, 'warmup': 2, 'cooldown': 3 },
    'session_trigger': { 'activity_end': 0, 'manual': 1, 'auto_multi_sport': 2, 'fitness_equipment': 3 },
    'autolap_trigger': {
        'time': 0,
        'distance': 1,
        'position_start': 2,
        'position_lap': 3,
        'position_waypoint': 4,
        'position_marked': 5,
        'off': 6
    },
    'lap_trigger': {
        'manual': 0,
        'time': 1,
        'distance': 2,
        'position_start': 3,
        'position_lap': 4,
        'position_waypoint': 5,
        'position_marked': 6,
        'session_end': 7,
        'fitness_equipment': 8
    },
    'time_mode': {
        'hour12': 0,
        'hour24': 1,
        'military': 2,
        'hour_12_with_seconds': 3,
        'hour_24_with_seconds': 4,
        'utc': 5
    },
    'backlight_mode': {
        'off': 0,
        'manual': 1,
        'key_and_messages': 2,
        'auto_brightness': 3,
        'smart_notifications': 4,
        'key_and_messages_night': 5,
        'key_and_messages_and_smart_notifications': 6
    },
    'date_mode': { 'day_month': 0, 'month_day': 1 },
    'backlight_timeout': { 'infinite': 0 },
    'event': {
        'timer': 0,
        'workout': 3,
        'workout_step': 4,
        'power_down': 5,
        'power_up': 6,
        'off_course': 7,
        'session': 8,
        'lap': 9,
        'course_point': 10,
        'battery': 11,
        'virtual_partner_pace': 12,
        'hr_high_alert': 13,
        'hr_low_alert': 14,
        'speed_high_alert': 15,
        'speed_low_alert': 16,
        'cad_high_alert': 17,
        'cad_low_alert': 18,
        'power_high_alert': 19,
        'power_low_alert': 20,
        'recovery_hr': 21,
        'battery_low': 22,
        'time_duration_alert': 23,
        'distance_duration_alert': 24,
        'calorie_duration_alert': 25,
        'activity': 26,
        'fitness_equipment': 27,
        'length': 28,
        'user_marker': 32,
        'sport_point': 33,
        'calibration': 36,
        'front_gear_change': 42,
        'rear_gear_change': 43,
        'rider_position_change': 44,
        'elev_high_alert': 45,
        'elev_low_alert': 46,
        'comm_timeout': 47
    },
    'event_type': {
        'start': 0,
        'stop': 1,
        'consecutive_depreciated': 2,
        'marker': 3,
        'stop_all': 4,
        'begin_depreciated': 5,
        'end_depreciated': 6,
        'end_all_depreciated': 7,
        'stop_disable': 8,
        'stop_disable_all': 9
    },
    'timer_trigger': { 'manual': 0, 'auto': 1, 'fitness_equipment': 2 },
    'fitness_equipment_state': { 'ready': 0, 'in_use': 1, 'paused': 2, 'unknown': 3 },
    'tone': { 'off': 0, 'tone': 1, 'vibrate': 2, 'tone_and_vibrate': 3 },
    'autoscroll': { 'none': 0, 'slow': 1, 'medium': 2, 'fast': 3 },
    'activity_class': { '0': 0, 'level_max': 100, 'level': 127, 'athlete': 128 },
    'hr_zone_calc': { 'custom': 0, 'percent_max_hr': 1, 'percent_hrr': 2 },
    'pwr_zone_calc': { 'custom': 0, 'percent_ftp': 1 },
    'wkt_step_duration': {
        'time': 0,
        'distance': 1,
        'hr_less_than': 2,
        'hr_greater_than': 3,
        'calories': 4,
        'open': 5,
        'repeat_until_steps_cmplt': 6,
        'repeat_until_time': 7,
        'repeat_until_distance': 8,
        'repeat_until_calories': 9,
        'repeat_until_hr_less_than': 10,
        'repeat_until_hr_greater_than': 11,
        'repeat_until_power_less_than': 12,
        'repeat_until_power_greater_than': 13,
        'power_less_than': 14,
        'power_greater_than': 15,
        'training_peaks_tss': 16,
        'repeat_until_power_last_lap_less_than': 17,
        'repeat_until_max_power_last_lap_less_than': 18,
        'power_3s_less_than': 19,
        'power_10s_less_than': 20,
        'power_30s_less_than': 21,
        'power_3s_greater_than': 22,
        'power_10s_greater_than': 23,
        'power_30s_greater_than': 24,
        'power_lap_less_than': 25,
        'power_lap_greater_than': 26,
        'repeat_until_training_peaks_tss': 27,
        'repetition_time': 28,
        'reps': 29
    },
    'wkt_step_target': {
        'speed': 0,
        'heart_rate': 1,
        'open': 2,
        'cadence': 3,
        'power': 4,
        'grade': 5,
        'resistance': 6,
        'power_3s': 7,
        'power_10s': 8,
        'power_30s': 9,
        'power_lap': 10,
        'swim_stroke': 11,
        'speed_lap': 12,
        'heart_rate_lap': 13
    },
    'goal': { 'time': 0, 'distance': 1, 'calories': 2, 'frequency': 3, 'steps': 4, 'ascent': 5, 'active_minutes': 6 },
    'goal_recurrence': { 'off': 0, 'daily': 1, 'weekly': 2, 'monthly': 3, 'yearly': 4, 'custom': 5 },
    'goal_source': { 'auto': 0, 'community': 1, 'user': 2 },
    'schedule': { 'workout': 0, 'course': 1 },
    'course_point': {
        'generic': 0,
        'summit': 1,
        'valley': 2,
        'water': 3,
        'food': 4,
        'danger': 5,
        'left': 6,
        'right': 7,
        'straight': 8,
        'first_aid': 9,
        'fourth_category': 10,
        'third_category': 11,
        'second_category': 12,
        'first_category': 13,
        'hors_category': 14,
        'sprint': 15,
        'left_fork': 16,
        'right_fork': 17,
        'middle_fork': 18,
        'slight_left': 19,
        'sharp_left': 20,
        'slight_right': 21,
        'sharp_right': 22,
        'u_turn': 23,
        'segment_start': 24,
        'segment_end': 25
    },
    'manufacturer': {
        '0': 0,
        'garmin': 1,
        'garmin_fr405_antfs': 2,
        'zephyr': 3,
        'dayton': 4,
        'idt': 5,
        'srm': 6,
        'quarq': 7,
        'ibike': 8,
        'saris': 9,
        'spark_hk': 10,
        'tanita': 11,
        'echowell': 12,
        'dynastream_oem': 13,
        'nautilus': 14,
        'dynastream': 15,
        'timex': 16,
        'metrigear': 17,
        'xelic': 18,
        'beurer': 19,
        'cardiosport': 20,
        'a_and_d': 21,
        'hmm': 22,
        'suunto': 23,
        'thita_elektronik': 24,
        'gpulse': 25,
        'clean_mobile': 26,
        'pedal_brain': 27,
        'peaksware': 28,
        'saxonar': 29,
        'lemond_fitness': 30,
        'dexcom': 31,
        'wahoo_fitness': 32,
        'octane_fitness': 33,
        'archinoetics': 34,
        'the_hurt_box': 35,
        'citizen_systems': 36,
        'magellan': 37,
        'osynce': 38,
        'holux': 39,
        'concept2': 40,
        'one_giant_leap': 42,
        'ace_sensor': 43,
        'brim_brothers': 44,
        'xplova': 45,
        'perception_digital': 46,
        'bf1systems': 47,
        'pioneer': 48,
        'spantec': 49,
        'metalogics': 50,
        '4iiiis': 51,
        'seiko_epson': 52,
        'seiko_epson_oem': 53,
        'ifor_powell': 54,
        'maxwell_guider': 55,
        'star_trac': 56,
        'breakaway': 57,
        'alatech_technology_ltd': 58,
        'mio_technology_europe': 59,
        'rotor': 60,
        'geonaute': 61,
        'id_bike': 62,
        'specialized': 63,
        'wtek': 64,
        'physical_enterprises': 65,
        'north_pole_engineering': 66,
        'bkool': 67,
        'cateye': 68,
        'stages_cycling': 69,
        'sigmasport': 70,
        'tomtom': 71,
        'peripedal': 72,
        'wattbike': 73,
        'moxy': 76,
        'ciclosport': 77,
        'powerbahn': 78,
        'acorn_projects_aps': 79,
        'lifebeam': 80,
        'bontrager': 81,
        'wellgo': 82,
        'scosche': 83,
        'magura': 84,
        'woodway': 85,
        'elite': 86,
        'nielsen_kellerman': 87,
        'dk_city': 88,
        'tacx': 89,
        'direction_technology': 90,
        'magtonic': 91,
        '1partcarbon': 92,
        'inside_ride_technologies': 93,
        'sound_of_motion': 94,
        'stryd': 95,
        'icg': 96,
        'mipulse': 97,
        'bsx_athletics': 98,
        'look': 99,
        'campagnolo_srl': 100,
        'body_bike_smart': 101,
        'praxisworks': 102,
        'limits_technology': 103,
        'topaction_technology': 104,
        'cosinuss': 105,
        'fitcare': 106,
        'magene': 107,
        'giant_manufacturing_co': 108,
        'tigrasport': 109,
        'salutron': 110,
        'technogym': 111,
        'bryton_sensors': 112,
        'latitude_limited': 113,
        'soaring_technology': 114,
        'igpsport': 115,
        'thinkrider': 116,
        'gopher_sport': 117,
        'waterrower': 118,
        'orangetheory': 119,
        'inpeak': 120,
        'kinetic': 121,
        'johnson_health_tech': 122,
        'polar_electro': 123,
        'seesense': 124,
        'nci_technology': 125,
        'development': 255,
        'healthandlife': 257,
        'lezyne': 258,
        'scribe_labs': 259,
        'zwift': 260,
        'watteam': 261,
        'recon': 262,
        'favero_electronics': 263,
        'dynovelo': 264,
        'strava': 265,
        'precor': 266,
        'bryton': 267,
        'sram': 268,
        'navman': 269,
        'cobi': 270,
        'spivi': 271,
        'mio_magellan': 272,
        'evesports': 273,
        'sensitivus_gauge': 274,
        'podoon': 275,
        'life_time_fitness': 276,
        'falco_e_motors': 277,
        'minoura': 278,
        'cycliq': 279,
        'luxottica': 280,
        'trainer_road': 281,
        'the_sufferfest': 282,
        'fullspeedahead': 283,
        'virtualtraining': 284,
        'feedbacksports': 285,
        'omata': 286,
        'vdo': 287,
        'magneticdays': 288,
        'hammerhead': 289,
        'kinetic_by_kurt': 290,
        'shapelog': 291,
        'dabuziduo': 292,
        'jetblack': 293,
        'coros': 294,
        'virtugo': 295,
        'velosense': 296,
        'actigraphcorp': 5759
    },
    'garmin_product': {
        'hrm_bike': 0,
        'hrm1': 1,
        'axh01': 2,
        'axb01': 3,
        'axb02': 4,
        'hrm2ss': 5,
        'dsi_alf02': 6,
        'hrm3ss': 7,
        'hrm_run_single_byte_product_id': 8,
        'bsm': 9,
        'bcm': 10,
        'axs01': 11,
        'hrm_tri_single_byte_product_id': 12,
        'fr225_single_byte_product_id': 14,
        'fr301_china': 473,
        'fr301_japan': 474,
        'fr301_korea': 475,
        'fr301_taiwan': 494,
        'fr405': 717,
        'fr50': 782,
        'fr405_japan': 987,
        'fr60': 988,
        'dsi_alf01': 1011,
        'fr310xt': 1018,
        'edge500': 1036,
        'fr110': 1124,
        'edge800': 1169,
        'edge500_taiwan': 1199,
        'edge500_japan': 1213,
        'chirp': 1253,
        'fr110_japan': 1274,
        'edge200': 1325,
        'fr910xt': 1328,
        'edge800_taiwan': 1333,
        'edge800_japan': 1334,
        'alf04': 1341,
        'fr610': 1345,
        'fr210_japan': 1360,
        'vector_ss': 1380,
        'vector_cp': 1381,
        'edge800_china': 1386,
        'edge500_china': 1387,
        'fr610_japan': 1410,
        'edge500_korea': 1422,
        'fr70': 1436,
        'fr310xt_4t': 1446,
        'amx': 1461,
        'fr10': 1482,
        'edge800_korea': 1497,
        'swim': 1499,
        'fr910xt_china': 1537,
        'fenix': 1551,
        'edge200_taiwan': 1555,
        'edge510': 1561,
        'edge810': 1567,
        'tempe': 1570,
        'fr910xt_japan': 1600,
        'fr620': 1623,
        'fr220': 1632,
        'fr910xt_korea': 1664,
        'fr10_japan': 1688,
        'edge810_japan': 1721,
        'virb_elite': 1735,
        'edge_touring': 1736,
        'edge510_japan': 1742,
        'hrm_tri': 1743,
        'hrm_run': 1752,
        'fr920xt': 1765,
        'edge510_asia': 1821,
        'edge810_china': 1822,
        'edge810_taiwan': 1823,
        'edge1000': 1836,
        'vivo_fit': 1837,
        'virb_remote': 1853,
        'vivo_ki': 1885,
        'fr15': 1903,
        'vivo_active': 1907,
        'edge510_korea': 1918,
        'fr620_japan': 1928,
        'fr620_china': 1929,
        'fr220_japan': 1930,
        'fr220_china': 1931,
        'approach_s6': 1936,
        'vivo_smart': 1956,
        'fenix2': 1967,
        'epix': 1988,
        'fenix3': 2050,
        'edge1000_taiwan': 2052,
        'edge1000_japan': 2053,
        'fr15_japan': 2061,
        'edge520': 2067,
        'edge1000_china': 2070,
        'fr620_russia': 2072,
        'fr220_russia': 2073,
        'vector_s': 2079,
        'edge1000_korea': 2100,
        'fr920xt_taiwan': 2130,
        'fr920xt_china': 2131,
        'fr920xt_japan': 2132,
        'virbx': 2134,
        'vivo_smart_apac': 2135,
        'etrex_touch': 2140,
        'edge25': 2147,
        'fr25': 2148,
        'vivo_fit2': 2150,
        'fr225': 2153,
        'fr630': 2156,
        'fr230': 2157,
        'fr735xt': 2158,
        'vivo_active_apac': 2160,
        'vector_2': 2161,
        'vector_2s': 2162,
        'virbxe': 2172,
        'fr620_taiwan': 2173,
        'fr220_taiwan': 2174,
        'truswing': 2175,
        'fenix3_china': 2188,
        'fenix3_twn': 2189,
        'varia_headlight': 2192,
        'varia_taillight_old': 2193,
        'edge_explore_1000': 2204,
        'fr225_asia': 2219,
        'varia_radar_taillight': 2225,
        'varia_radar_display': 2226,
        'edge20': 2238,
        'd2_bravo': 2262,
        'approach_s20': 2266,
        'varia_remote': 2276,
        'hrm4_run': 2327,
        'vivo_active_hr': 2337,
        'vivo_smart_hr': 2348,
        'vivo_move': 2368,
        'varia_vision': 2398,
        'vivo_fit3': 2406,
        'fenix3_hr': 2413,
        'virb_ultra_30': 2417,
        'index_smart_scale': 2429,
        'fr235': 2431,
        'fenix3_chronos': 2432,
        'oregon7xx': 2441,
        'rino7xx': 2444,
        'nautix': 2496,
        'edge_820': 2530,
        'edge_explore_820': 2531,
        'fenix5s': 2544,
        'd2_bravo_titanium': 2547,
        'varia_ut800': 2567,
        'running_dynamics_pod': 2593,
        'fenix5x': 2604,
        'vivo_fit_jr': 2606,
        'fr935': 2691,
        'fenix5': 2697,
        'descent': 2859,
        'sdm4': 10007,
        'edge_remote': 10014,
        'training_center': 20119,
        'connectiq_simulator': 65531,
        'android_antplus_plugin': 65532,
        'connect': 65534
    },
    'antplus_device_type': {
        '0': 0,
        'antfs': 1,
        'bike_power': 11,
        'environment_sensor_legacy': 12,
        'multi_sport_speed_distance': 15,
        'control': 16,
        'fitness_equipment': 17,
        'blood_pressure': 18,
        'geocache_node': 19,
        'light_electric_vehicle': 20,
        'env_sensor': 25,
        'racquet': 26,
        'control_hub': 27,
        'muscle_oxygen': 31,
        'bike_light_main': 35,
        'bike_light_shared': 36,
        'exd': 38,
        'bike_radar': 40,
        'weight_scale': 119,
        'heart_rate': 120,
        'bike_speed_cadence': 121,
        'bike_cadence': 122,
        'bike_speed': 123,
        'stride_speed_distance': 124
    },
    'ant_network': { 'public': 0, 'antplus': 1, 'antfs': 2, 'private': 3 },
    'workout_capabilities': {
        '0': 0,
        'interval': 1,
        'custom': 2,
        'fitness_equipment': 4,
        'firstbeat': 8,
        'new_leaf': 16,
        'tcx': 32,
        'speed': 128,
        'heart_rate': 256,
        'distance': 512,
        'cadence': 1024,
        'power': 2048,
        'grade': 4096,
        'resistance': 8192,
        'protected': 16384
    },
    'battery_status': { '0': 0, 'new': 1, 'good': 2, 'ok': 3, 'low': 4, 'critical': 5, 'charging': 6, 'unknown': 7 },
    'hr_type': { 'normal': 0, 'irregular': 1 },
    'course_capabilities': {
        '0': 0,
        'processed': 1,
        'valid': 2,
        'time': 4,
        'distance': 8,
        'position': 16,
        'heart_rate': 32,
        'power': 64,
        'cadence': 128,
        'training': 256,
        'navigation': 512,
        'bikeway': 1024
    },
    'weight': { '0': 0, 'calculating': 65534 },
    'workout_hr': { '0': 0, 'bpm_offset': 100 },
    'workout_power': { '0': 0, 'watts_offset': 1000 },
    'bp_status': {
        'no_error': 0,
        'error_incomplete_data': 1,
        'error_no_measurement': 2,
        'error_data_out_of_range': 3,
        'error_irregular_heart_rate': 4
    },
    'user_local_id': {
        'local_min': 0,
        'local_max': 15,
        'stationary_min': 16,
        'stationary_max': 255,
        'portable_min': 256,
        'portable_max': 65534
    },
    'swim_stroke': {
        'freestyle': 0,
        'backstroke': 1,
        'breaststroke': 2,
        'butterfly': 3,
        'drill': 4,
        'mixed': 5,
        'im': 6
    },
    'activity_type': {
        'generic': 0,
        'running': 1,
        'cycling': 2,
        'transition': 3,
        'fitness_equipment': 4,
        'swimming': 5,
        'walking': 6,
        'sedentary': 8,
        'all': 254
    },
    'activity_subtype': {
        'generic': 0,
        'treadmill': 1,
        'street': 2,
        'trail': 3,
        'track': 4,
        'spin': 5,
        'indoor_cycling': 6,
        'road': 7,
        'mountain': 8,
        'downhill': 9,
        'recumbent': 10,
        'cyclocross': 11,
        'hand_cycling': 12,
        'track_cycling': 13,
        'indoor_rowing': 14,
        'elliptical': 15,
        'stair_climbing': 16,
        'lap_swimming': 17,
        'open_water': 18,
        'all': 254
    },
    'activity_level': { 'low': 0, 'medium': 1, 'high': 2 },
    'side': { 'right': 0, 'left': 1 },
    'left_right_balance': { '0': 0, 'mask': 127, 'right': 128 },
    'left_right_balance_100': { '0': 0, 'mask': 16383, 'right': 32768 },
    'length_type': { 'idle': 0, 'active': 1 },
    'day_of_week': { 'sunday': 0, 'monday': 1, 'tuesday': 2, 'wednesday': 3, 'thursday': 4, 'friday': 5, 'saturday': 6 },
    'connectivity_capabilities': {
        '0': 0,
        'bluetooth': 1,
        'bluetooth_le': 2,
        'ant': 4,
        'activity_upload': 8,
        'course_download': 16,
        'workout_download': 32,
        'live_track': 64,
        'weather_conditions': 128,
        'weather_alerts': 256,
        'gps_ephemeris_download': 512,
        'explicit_archive': 1024,
        'setup_incomplete': 2048,
        'continue_sync_after_software_update': 4096,
        'connect_iq_app_download': 8192,
        'golf_course_download': 16384,
        'device_initiates_sync': 32768,
        'connect_iq_watch_app_download': 65536,
        'connect_iq_widget_download': 131072,
        'connect_iq_watch_face_download': 262144,
        'connect_iq_data_field_download': 524288,
        'connect_iq_app_managment': 1048576,
        'swing_sensor': 2097152,
        'swing_sensor_remote': 4194304,
        'incident_detection': 8388608,
        'audio_prompts': 16777216,
        'wifi_verification': 33554432,
        'true_up': 67108864,
        'find_my_watch': 134217728,
        'remote_manual_sync': 268435456,
        'live_track_auto_start': 536870912,
        'live_track_messaging': 1073741824,
        'instant_input': 2147483648
    },
    'weather_report': { 'current': 0, 'hourly_forecast': 1, 'daily_forecast': 2 },
    'weather_status': {
        'clear': 0,
        'partly_cloudy': 1,
        'mostly_cloudy': 2,
        'rain': 3,
        'snow': 4,
        'windy': 5,
        'thunderstorms': 6,
        'wintry_mix': 7,
        'fog': 8,
        'hazy': 11,
        'hail': 12,
        'scattered_showers': 13,
        'scattered_thunderstorms': 14,
        'unknown_precipitation': 15,
        'light_rain': 16,
        'heavy_rain': 17,
        'light_snow': 18,
        'heavy_snow': 19,
        'light_rain_snow': 20,
        'heavy_rain_snow': 21,
        'cloudy': 22
    },
    'weather_severity': { 'unknown': 0, 'warning': 1, 'watch': 2, 'advisory': 3, 'statement': 4 },
    'weather_severe_type': {
        'unspecified': 0,
        'tornado': 1,
        'tsunami': 2,
        'hurricane': 3,
        'extreme_wind': 4,
        'typhoon': 5,
        'inland_hurricane': 6,
        'hurricane_force_wind': 7,
        'waterspout': 8,
        'severe_thunderstorm': 9,
        'wreckhouse_winds': 10,
        'les_suetes_wind': 11,
        'avalanche': 12,
        'flash_flood': 13,
        'tropical_storm': 14,
        'inland_tropical_storm': 15,
        'blizzard': 16,
        'ice_storm': 17,
        'freezing_rain': 18,
        'debris_flow': 19,
        'flash_freeze': 20,
        'dust_storm': 21,
        'high_wind': 22,
        'winter_storm': 23,
        'heavy_freezing_spray': 24,
        'extreme_cold': 25,
        'wind_chill': 26,
        'cold_wave': 27,
        'heavy_snow_alert': 28,
        'lake_effect_blowing_snow': 29,
        'snow_squall': 30,
        'lake_effect_snow': 31,
        'winter_weather': 32,
        'sleet': 33,
        'snowfall': 34,
        'snow_and_blowing_snow': 35,
        'blowing_snow': 36,
        'snow_alert': 37,
        'arctic_outflow': 38,
        'freezing_drizzle': 39,
        'storm': 40,
        'storm_surge': 41,
        'rainfall': 42,
        'areal_flood': 43,
        'coastal_flood': 44,
        'lakeshore_flood': 45,
        'excessive_heat': 46,
        'heat': 47,
        'weather': 48,
        'high_heat_and_humidity': 49,
        'humidex_and_health': 50,
        'humidex': 51,
        'gale': 52,
        'freezing_spray': 53,
        'special_marine': 54,
        'squall': 55,
        'strong_wind': 56,
        'lake_wind': 57,
        'marine_weather': 58,
        'wind': 59,
        'small_craft_hazardous_seas': 60,
        'hazardous_seas': 61,
        'small_craft': 62,
        'small_craft_winds': 63,
        'small_craft_rough_bar': 64,
        'high_water_level': 65,
        'ashfall': 66,
        'freezing_fog': 67,
        'dense_fog': 68,
        'dense_smoke': 69,
        'blowing_dust': 70,
        'hard_freeze': 71,
        'freeze': 72,
        'frost': 73,
        'fire_weather': 74,
        'flood': 75,
        'rip_tide': 76,
        'high_surf': 77,
        'smog': 78,
        'air_quality': 79,
        'brisk_wind': 80,
        'air_stagnation': 81,
        'low_water': 82,
        'hydrological': 83,
        'special_weather': 84
    },
    'stroke_type': { 'no_event': 0, 'other': 1, 'serve': 2, 'forehand': 3, 'backhand': 4, 'smash': 5 },
    'body_location': {
        'left_leg': 0,
        'left_calf': 1,
        'left_shin': 2,
        'left_hamstring': 3,
        'left_quad': 4,
        'left_glute': 5,
        'right_leg': 6,
        'right_calf': 7,
        'right_shin': 8,
        'right_hamstring': 9,
        'right_quad': 10,
        'right_glute': 11,
        'torso_back': 12,
        'left_lower_back': 13,
        'left_upper_back': 14,
        'right_lower_back': 15,
        'right_upper_back': 16,
        'torso_front': 17,
        'left_abdomen': 18,
        'left_chest': 19,
        'right_abdomen': 20,
        'right_chest': 21,
        'left_arm': 22,
        'left_shoulder': 23,
        'left_bicep': 24,
        'left_tricep': 25,
        'left_brachioradialis': 26,
        'left_forearm_extensors': 27,
        'right_arm': 28,
        'right_shoulder': 29,
        'right_bicep': 30,
        'right_tricep': 31,
        'right_brachioradialis': 32,
        'right_forearm_extensors': 33,
        'neck': 34,
        'throat': 35,
        'waist_mid_back': 36,
        'waist_front': 37,
        'waist_left': 38,
        'waist_right': 39
    },
    'segment_lap_status': { 'end': 0, 'fail': 1 },
    'segment_leaderboard_type': {
        'overall': 0,
        'personal_best': 1,
        'connections': 2,
        'group': 3,
        'challenger': 4,
        'kom': 5,
        'qom': 6,
        'pr': 7,
        'goal': 8,
        'rival': 9,
        'club_leader': 10
    },
    'segment_delete_status': { 'do_not_delete': 0, 'delete_one': 1, 'delete_all': 2 },
    'segment_selection_type': { 'starred': 0, 'suggested': 1 },
    'source_type': { 'ant': 0, 'antplus': 1, 'bluetooth': 2, 'bluetooth_low_energy': 3, 'wifi': 4, 'local': 5 },
    'display_orientation': { 'auto': 0, 'portrait': 1, 'landscape': 2, 'portrait_flipped': 3, 'landscape_flipped': 4 },
    'workout_equipment': {
        'none': 0,
        'swim_fins': 1,
        'swim_kickboard': 2,
        'swim_paddles': 3,
        'swim_pull_buoy': 4,
        'swim_snorkel': 5
    },
    'watchface_mode': { 'digital': 0, 'analog': 1, 'connect_iq': 2, 'disabled': 3 },
    'digital_watchface_layout': { 'traditional': 0, 'modern': 1, 'bold': 2 },
    'analog_watchface_layout': { 'minimal': 0, 'traditional': 1, 'modern': 2 },
    'rider_position_type': { 'seated': 0, 'standing': 1, 'transition_to_seated': 2, 'transition_to_standing': 3 },
    'power_phase_type': {
        'power_phase_start_angle': 0,
        'power_phase_end_angle': 1,
        'power_phase_arc_length': 2,
        'power_phase_center': 3
    },
    'camera_event_type': {
        'video_start': 0,
        'video_split': 1,
        'video_end': 2,
        'photo_taken': 3,
        'video_second_stream_start': 4,
        'video_second_stream_split': 5,
        'video_second_stream_end': 6,
        'video_split_start': 7,
        'video_second_stream_split_start': 8,
        'video_pause': 11,
        'video_second_stream_pause': 12,
        'video_resume': 13,
        'video_second_stream_resume': 14
    },
    'sensor_type': { 'accelerometer': 0, 'gyroscope': 1, 'compass': 2, 'barometer': 3 },
    'bike_light_network_config_type': { 'auto': 0, 'individual': 4, 'high_visibility': 5, 'trail': 6 },
    'comm_timeout_type': {
        'wildcard_pairing_timeout': 0,
        'pairing_timeout': 1,
        'connection_lost': 2,
        'connection_timeout': 3
    },
    'camera_orientation_type': {
        'camera_orientation_0': 0,
        'camera_orientation_90': 1,
        'camera_orientation_180': 2,
        'camera_orientation_270': 3
    },
    'attitude_stage': { 'failed': 0, 'aligning': 1, 'degraded': 2, 'valid': 3 },
    'attitude_validity': {
        '0': 0,
        'track_angle_heading_valid': 1,
        'pitch_valid': 2,
        'roll_valid': 4,
        'lateral_body_accel_valid': 8,
        'normal_body_accel_valid': 16,
        'turn_rate_valid': 32,
        'hw_fail': 64,
        'mag_invalid': 128,
        'no_gps': 256,
        'gps_invalid': 512,
        'solution_coasting': 1024,
        'true_track_angle': 2048,
        'magnetic_heading': 4096
    },
    'auto_sync_frequency': { 'never': 0, 'occasionally': 1, 'frequent': 2, 'once_a_day': 3, 'remote': 4 },
    'exd_layout': {
        'full_screen': 0,
        'half_vertical': 1,
        'half_horizontal': 2,
        'half_vertical_right_split': 3,
        'half_horizontal_bottom_split': 4,
        'full_quarter_split': 5,
        'half_vertical_left_split': 6,
        'half_horizontal_top_split': 7
    },
    'exd_display_type': {
        'numerical': 0,
        'simple': 1,
        'graph': 2,
        'bar': 3,
        'circle_graph': 4,
        'virtual_partner': 5,
        'balance': 6,
        'string_list': 7,
        'string': 8,
        'simple_dynamic_icon': 9,
        'gauge': 10
    },
    'exd_data_units': {
        'no_units': 0,
        'laps': 1,
        'miles_per_hour': 2,
        'kilometers_per_hour': 3,
        'feet_per_hour': 4,
        'meters_per_hour': 5,
        'degrees_celsius': 6,
        'degrees_farenheit': 7,
        'zone': 8,
        'gear': 9,
        'rpm': 10,
        'bpm': 11,
        'degrees': 12,
        'millimeters': 13,
        'meters': 14,
        'kilometers': 15,
        'feet': 16,
        'yards': 17,
        'kilofeet': 18,
        'miles': 19,
        'time': 20,
        'enum_turn_type': 21,
        'percent': 22,
        'watts': 23,
        'watts_per_kilogram': 24,
        'enum_battery_status': 25,
        'enum_bike_light_beam_angle_mode': 26,
        'enum_bike_light_battery_status': 27,
        'enum_bike_light_network_config_type': 28,
        'lights': 29,
        'seconds': 30,
        'minutes': 31,
        'hours': 32,
        'calories': 33,
        'kilojoules': 34,
        'milliseconds': 35,
        'second_per_mile': 36,
        'second_per_kilometer': 37,
        'centimeter': 38,
        'enum_course_point': 39,
        'bradians': 40,
        'enum_sport': 41,
        'inches_hg': 42,
        'mm_hg': 43,
        'mbars': 44,
        'hecto_pascals': 45,
        'feet_per_min': 46,
        'meters_per_min': 47,
        'meters_per_sec': 48,
        'eight_cardinal': 49
    },
    'exd_qualifiers': {
        'no_qualifier': 0,
        'instantaneous': 1,
        'average': 2,
        'lap': 3,
        'maximum': 4,
        'maximum_average': 5,
        'maximum_lap': 6,
        'last_lap': 7,
        'average_lap': 8,
        'to_destination': 9,
        'to_go': 10,
        'to_next': 11,
        'next_course_point': 12,
        'total': 13,
        'three_second_average': 14,
        'ten_second_average': 15,
        'thirty_second_average': 16,
        'percent_maximum': 17,
        'percent_maximum_average': 18,
        'lap_percent_maximum': 19,
        'elapsed': 20,
        'sunrise': 21,
        'sunset': 22,
        'compared_to_virtual_partner': 23,
        'maximum_24h': 24,
        'minimum_24h': 25,
        'minimum': 26,
        'first': 27,
        'second': 28,
        'third': 29,
        'shifter': 30,
        'last_sport': 31,
        'moving': 32,
        'stopped': 33,
        'estimated_total': 34,
        'zone_9': 242,
        'zone_8': 243,
        'zone_7': 244,
        'zone_6': 245,
        'zone_5': 246,
        'zone_4': 247,
        'zone_3': 248,
        'zone_2': 249,
        'zone_1': 250
    },
    'exd_descriptors': {
        'bike_light_battery_status': 0,
        'beam_angle_status': 1,
        'batery_level': 2,
        'light_network_mode': 3,
        'number_lights_connected': 4,
        'cadence': 5,
        'distance': 6,
        'estimated_time_of_arrival': 7,
        'heading': 8,
        'time': 9,
        'battery_level': 10,
        'trainer_resistance': 11,
        'trainer_target_power': 12,
        'time_seated': 13,
        'time_standing': 14,
        'elevation': 15,
        'grade': 16,
        'ascent': 17,
        'descent': 18,
        'vertical_speed': 19,
        'di2_battery_level': 20,
        'front_gear': 21,
        'rear_gear': 22,
        'gear_ratio': 23,
        'heart_rate': 24,
        'heart_rate_zone': 25,
        'time_in_heart_rate_zone': 26,
        'heart_rate_reserve': 27,
        'calories': 28,
        'gps_accuracy': 29,
        'gps_signal_strength': 30,
        'temperature': 31,
        'time_of_day': 32,
        'balance': 33,
        'pedal_smoothness': 34,
        'power': 35,
        'functional_threshold_power': 36,
        'intensity_factor': 37,
        'work': 38,
        'power_ratio': 39,
        'normalized_power': 40,
        'training_stress_Score': 41,
        'time_on_zone': 42,
        'speed': 43,
        'laps': 44,
        'reps': 45,
        'workout_step': 46,
        'course_distance': 47,
        'navigation_distance': 48,
        'course_estimated_time_of_arrival': 49,
        'navigation_estimated_time_of_arrival': 50,
        'course_time': 51,
        'navigation_time': 52,
        'course_heading': 53,
        'navigation_heading': 54,
        'power_zone': 55,
        'torque_effectiveness': 56,
        'timer_time': 57,
        'power_weight_ratio': 58,
        'left_platform_center_offset': 59,
        'right_platform_center_offset': 60,
        'left_power_phase_start_angle': 61,
        'right_power_phase_start_angle': 62,
        'left_power_phase_finish_angle': 63,
        'right_power_phase_finish_angle': 64,
        'gears': 65,
        'pace': 66,
        'training_effect': 67,
        'vertical_oscillation': 68,
        'vertical_ratio': 69,
        'ground_contact_time': 70,
        'left_ground_contact_time_balance': 71,
        'right_ground_contact_time_balance': 72,
        'stride_length': 73,
        'running_cadence': 74,
        'performance_condition': 75,
        'course_type': 76,
        'time_in_power_zone': 77,
        'navigation_turn': 78,
        'course_location': 79,
        'navigation_location': 80,
        'compass': 81,
        'gear_combo': 82,
        'muscle_oxygen': 83,
        'icon': 84,
        'compass_heading': 85,
        'gps_heading': 86,
        'gps_elevation': 87,
        'anaerobic_training_effect': 88,
        'course': 89,
        'off_course': 90,
        'glide_ratio': 91,
        'vertical_distance': 92,
        'vmg': 93,
        'ambient_pressure': 94,
        'pressure': 95,
        'vam': 96
    },
    'auto_activity_detect': {
        'none': 0,
        'running': 1,
        'cycling': 2,
        'swimming': 4,
        'walking': 8,
        'elliptical': 16,
        'sedentary': 32
    },
    'supported_exd_screen_layouts': {
        '0': 0,
        'full_screen': 1,
        'half_vertical': 2,
        'half_horizontal': 4,
        'half_vertical_right_split': 8,
        'half_horizontal_bottom_split': 16,
        'full_quarter_split': 32,
        'half_vertical_left_split': 64,
        'half_horizontal_top_split': 128
    },
    'fit_base_type': {
        'enum': 0,
        'sint8': 1,
        'uint8': 2,
        'string': 7,
        'uint8z': 10,
        'byte': 13,
        'sint16': 131,
        'uint16': 132,
        'sint32': 133,
        'uint32': 134,
        'float32': 136,
        'float64': 137,
        'uint16z': 139,
        'uint32z': 140,
        'sint64': 142,
        'uint64': 143,
        'uint64z': 144
    },
    'turn_type': {
        'arriving_idx': 0,
        'arriving_left_idx': 1,
        'arriving_right_idx': 2,
        'arriving_via_idx': 3,
        'arriving_via_left_idx': 4,
        'arriving_via_right_idx': 5,
        'bear_keep_left_idx': 6,
        'bear_keep_right_idx': 7,
        'continue_idx': 8,
        'exit_left_idx': 9,
        'exit_right_idx': 10,
        'ferry_idx': 11,
        'roundabout_45_idx': 12,
        'roundabout_90_idx': 13,
        'roundabout_135_idx': 14,
        'roundabout_180_idx': 15,
        'roundabout_225_idx': 16,
        'roundabout_270_idx': 17,
        'roundabout_315_idx': 18,
        'roundabout_360_idx': 19,
        'roundabout_neg_45_idx': 20,
        'roundabout_neg_90_idx': 21,
        'roundabout_neg_135_idx': 22,
        'roundabout_neg_180_idx': 23,
        'roundabout_neg_225_idx': 24,
        'roundabout_neg_270_idx': 25,
        'roundabout_neg_315_idx': 26,
        'roundabout_neg_360_idx': 27,
        'roundabout_generic_idx': 28,
        'roundabout_neg_generic_idx': 29,
        'sharp_turn_left_idx': 30,
        'sharp_turn_right_idx': 31,
        'turn_left_idx': 32,
        'turn_right_idx': 33,
        'uturn_left_idx': 34,
        'uturn_right_idx': 35,
        'icon_inv_idx': 36,
        'icon_idx_cnt': 37
    },
    'bike_light_beam_angle_mode': { 'manual': 0, 'auto': 1 },
    'fit_base_unit': { 'other': 0, 'kilogram': 1, 'pound': 2 },
    'set_type': { 'rest': 0, 'active': 1 },
    'exercise_category': {
        'bench_press': 0,
        'calf_raise': 1,
        'cardio': 2,
        'carry': 3,
        'chop': 4,
        'core': 5,
        'crunch': 6,
        'curl': 7,
        'deadlift': 8,
        'flye': 9,
        'hip_raise': 10,
        'hip_stability': 11,
        'hip_swing': 12,
        'hyperextension': 13,
        'lateral_raise': 14,
        'leg_curl': 15,
        'leg_raise': 16,
        'lunge': 17,
        'olympic_lift': 18,
        'plank': 19,
        'plyo': 20,
        'pull_up': 21,
        'push_up': 22,
        'row': 23,
        'shoulder_press': 24,
        'shoulder_stability': 25,
        'shrug': 26,
        'sit_up': 27,
        'squat': 28,
        'total_body': 29,
        'triceps_extension': 30,
        'warm_up': 31,
        'run': 32,
        'unknown': 65534
    },
    'bench_press_exercise_name': {
        'alternating_dumbbell_chest_press_on_swiss_ball': 0,
        'barbell_bench_press': 1,
        'barbell_board_bench_press': 2,
        'barbell_floor_press': 3,
        'close_grip_barbell_bench_press': 4,
        'decline_dumbbell_bench_press': 5,
        'dumbbell_bench_press': 6,
        'dumbbell_floor_press': 7,
        'incline_barbell_bench_press': 8,
        'incline_dumbbell_bench_press': 9,
        'incline_smith_machine_bench_press': 10,
        'isometric_barbell_bench_press': 11,
        'kettlebell_chest_press': 12,
        'neutral_grip_dumbbell_bench_press': 13,
        'neutral_grip_dumbbell_incline_bench_press': 14,
        'one_arm_floor_press': 15,
        'weighted_one_arm_floor_press': 16,
        'partial_lockout': 17,
        'reverse_grip_barbell_bench_press': 18,
        'reverse_grip_incline_bench_press': 19,
        'single_arm_cable_chest_press': 20,
        'single_arm_dumbbell_bench_press': 21,
        'smith_machine_bench_press': 22,
        'swiss_ball_dumbbell_chest_press': 23,
        'triple_stop_barbell_bench_press': 24,
        'wide_grip_barbell_bench_press': 25,
        'alternating_dumbbell_chest_press': 26
    },
    'calf_raise_exercise_name': {
        '3_way_calf_raise': 0,
        '3_way_weighted_calf_raise': 1,
        '3_way_single_leg_calf_raise': 2,
        '3_way_weighted_single_leg_calf_raise': 3,
        'donkey_calf_raise': 4,
        'weighted_donkey_calf_raise': 5,
        'seated_calf_raise': 6,
        'weighted_seated_calf_raise': 7,
        'seated_dumbbell_toe_raise': 8,
        'single_leg_bent_knee_calf_raise': 9,
        'weighted_single_leg_bent_knee_calf_raise': 10,
        'single_leg_decline_push_up': 11,
        'single_leg_donkey_calf_raise': 12,
        'weighted_single_leg_donkey_calf_raise': 13,
        'single_leg_hip_raise_with_knee_hold': 14,
        'single_leg_standing_calf_raise': 15,
        'single_leg_standing_dumbbell_calf_raise': 16,
        'standing_barbell_calf_raise': 17,
        'standing_calf_raise': 18,
        'weighted_standing_calf_raise': 19,
        'standing_dumbbell_calf_raise': 20
    },
    'cardio_exercise_name': {
        'bob_and_weave_circle': 0,
        'weighted_bob_and_weave_circle': 1,
        'cardio_core_crawl': 2,
        'weighted_cardio_core_crawl': 3,
        'double_under': 4,
        'weighted_double_under': 5,
        'jump_rope': 6,
        'weighted_jump_rope': 7,
        'jump_rope_crossover': 8,
        'weighted_jump_rope_crossover': 9,
        'jump_rope_jog': 10,
        'weighted_jump_rope_jog': 11,
        'jumping_jacks': 12,
        'weighted_jumping_jacks': 13,
        'ski_moguls': 14,
        'weighted_ski_moguls': 15,
        'split_jacks': 16,
        'weighted_split_jacks': 17,
        'squat_jacks': 18,
        'weighted_squat_jacks': 19,
        'triple_under': 20,
        'weighted_triple_under': 21
    },
    'carry_exercise_name': {
        'bar_holds': 0,
        'farmers_walk': 1,
        'farmers_walk_on_toes': 2,
        'hex_dumbbell_hold': 3,
        'overhead_carry': 4
    },
    'chop_exercise_name': {
        'cable_pull_through': 0,
        'cable_rotational_lift': 1,
        'cable_woodchop': 2,
        'cross_chop_to_knee': 3,
        'weighted_cross_chop_to_knee': 4,
        'dumbbell_chop': 5,
        'half_kneeling_rotation': 6,
        'weighted_half_kneeling_rotation': 7,
        'half_kneeling_rotational_chop': 8,
        'half_kneeling_rotational_reverse_chop': 9,
        'half_kneeling_stability_chop': 10,
        'half_kneeling_stability_reverse_chop': 11,
        'kneeling_rotational_chop': 12,
        'kneeling_rotational_reverse_chop': 13,
        'kneeling_stability_chop': 14,
        'kneeling_woodchopper': 15,
        'medicine_ball_wood_chops': 16,
        'power_squat_chops': 17,
        'weighted_power_squat_chops': 18,
        'standing_rotational_chop': 19,
        'standing_split_rotational_chop': 20,
        'standing_split_rotational_reverse_chop': 21,
        'standing_stability_reverse_chop': 22
    },
    'core_exercise_name': {
        'abs_jabs': 0,
        'weighted_abs_jabs': 1,
        'alternating_plate_reach': 2,
        'barbell_rollout': 3,
        'weighted_barbell_rollout': 4,
        'body_bar_oblique_twist': 5,
        'cable_core_press': 6,
        'cable_side_bend': 7,
        'side_bend': 8,
        'weighted_side_bend': 9,
        'crescent_circle': 10,
        'weighted_crescent_circle': 11,
        'cycling_russian_twist': 12,
        'weighted_cycling_russian_twist': 13,
        'elevated_feet_russian_twist': 14,
        'weighted_elevated_feet_russian_twist': 15,
        'half_turkish_get_up': 16,
        'kettlebell_windmill': 17,
        'kneeling_ab_wheel': 18,
        'weighted_kneeling_ab_wheel': 19,
        'modified_front_lever': 20,
        'open_knee_tucks': 21,
        'weighted_open_knee_tucks': 22,
        'side_abs_leg_lift': 23,
        'weighted_side_abs_leg_lift': 24,
        'swiss_ball_jackknife': 25,
        'weighted_swiss_ball_jackknife': 26,
        'swiss_ball_pike': 27,
        'weighted_swiss_ball_pike': 28,
        'swiss_ball_rollout': 29,
        'weighted_swiss_ball_rollout': 30,
        'triangle_hip_press': 31,
        'weighted_triangle_hip_press': 32,
        'trx_suspended_jackknife': 33,
        'weighted_trx_suspended_jackknife': 34,
        'u_boat': 35,
        'weighted_u_boat': 36,
        'windmill_switches': 37,
        'weighted_windmill_switches': 38,
        'alternating_slide_out': 39,
        'weighted_alternating_slide_out': 40,
        'ghd_back_extensions': 41,
        'weighted_ghd_back_extensions': 42,
        'overhead_walk': 43,
        'inchworm': 44,
        'weighted_modified_front_lever': 45,
        'russian_twist': 46,
        'abdominal_leg_rotations': 47,
        'arm_and_leg_extension_on_knees': 48,
        'bicycle': 49,
        'bicep_curl_with_leg_extension': 50,
        'cat_cow': 51,
        'corkscrew': 52,
        'criss_cross': 53,
        'criss_cross_with_ball': 54,
        'double_leg_stretch': 55,
        'knee_folds': 56,
        'lower_lift': 57,
        'neck_pull': 58,
        'pelvic_clocks': 59,
        'roll_over': 60,
        'roll_up': 61,
        'rolling': 62,
        'rowing_1': 63,
        'rowing_2': 64,
        'scissors': 65,
        'single_leg_circles': 66,
        'single_leg_stretch': 67,
        'snake_twist_1_and_2': 68,
        'swan': 69,
        'swimming': 70,
        'teaser': 71,
        'the_hundred': 72
    },
    'crunch_exercise_name': {
        'bicycle_crunch': 0,
        'cable_crunch': 1,
        'circular_arm_crunch': 2,
        'crossed_arms_crunch': 3,
        'weighted_crossed_arms_crunch': 4,
        'cross_leg_reverse_crunch': 5,
        'weighted_cross_leg_reverse_crunch': 6,
        'crunch_chop': 7,
        'weighted_crunch_chop': 8,
        'double_crunch': 9,
        'weighted_double_crunch': 10,
        'elbow_to_knee_crunch': 11,
        'weighted_elbow_to_knee_crunch': 12,
        'flutter_kicks': 13,
        'weighted_flutter_kicks': 14,
        'foam_roller_reverse_crunch_on_bench': 15,
        'weighted_foam_roller_reverse_crunch_on_bench': 16,
        'foam_roller_reverse_crunch_with_dumbbell': 17,
        'foam_roller_reverse_crunch_with_medicine_ball': 18,
        'frog_press': 19,
        'hanging_knee_raise_oblique_crunch': 20,
        'weighted_hanging_knee_raise_oblique_crunch': 21,
        'hip_crossover': 22,
        'weighted_hip_crossover': 23,
        'hollow_rock': 24,
        'weighted_hollow_rock': 25,
        'incline_reverse_crunch': 26,
        'weighted_incline_reverse_crunch': 27,
        'kneeling_cable_crunch': 28,
        'kneeling_cross_crunch': 29,
        'weighted_kneeling_cross_crunch': 30,
        'kneeling_oblique_cable_crunch': 31,
        'knees_to_elbow': 32,
        'leg_extensions': 33,
        'weighted_leg_extensions': 34,
        'leg_levers': 35,
        'mcgill_curl_up': 36,
        'weighted_mcgill_curl_up': 37,
        'modified_pilates_roll_up_with_ball': 38,
        'weighted_modified_pilates_roll_up_with_ball': 39,
        'pilates_crunch': 40,
        'weighted_pilates_crunch': 41,
        'pilates_roll_up_with_ball': 42,
        'weighted_pilates_roll_up_with_ball': 43,
        'raised_legs_crunch': 44,
        'weighted_raised_legs_crunch': 45,
        'reverse_crunch': 46,
        'weighted_reverse_crunch': 47,
        'reverse_crunch_on_a_bench': 48,
        'weighted_reverse_crunch_on_a_bench': 49,
        'reverse_curl_and_lift': 50,
        'weighted_reverse_curl_and_lift': 51,
        'rotational_lift': 52,
        'weighted_rotational_lift': 53,
        'seated_alternating_reverse_crunch': 54,
        'weighted_seated_alternating_reverse_crunch': 55,
        'seated_leg_u': 56,
        'weighted_seated_leg_u': 57,
        'side_to_side_crunch_and_weave': 58,
        'weighted_side_to_side_crunch_and_weave': 59,
        'single_leg_reverse_crunch': 60,
        'weighted_single_leg_reverse_crunch': 61,
        'skater_crunch_cross': 62,
        'weighted_skater_crunch_cross': 63,
        'standing_cable_crunch': 64,
        'standing_side_crunch': 65,
        'step_climb': 66,
        'weighted_step_climb': 67,
        'swiss_ball_crunch': 68,
        'swiss_ball_reverse_crunch': 69,
        'weighted_swiss_ball_reverse_crunch': 70,
        'swiss_ball_russian_twist': 71,
        'weighted_swiss_ball_russian_twist': 72,
        'swiss_ball_side_crunch': 73,
        'weighted_swiss_ball_side_crunch': 74,
        'thoracic_crunches_on_foam_roller': 75,
        'weighted_thoracic_crunches_on_foam_roller': 76,
        'triceps_crunch': 77,
        'weighted_bicycle_crunch': 78,
        'weighted_crunch': 79,
        'weighted_swiss_ball_crunch': 80,
        'toes_to_bar': 81,
        'weighted_toes_to_bar': 82,
        'crunch': 83,
        'straight_leg_crunch_with_ball': 84
    },
    'curl_exercise_name': {
        'alternating_dumbbell_biceps_curl': 0,
        'alternating_dumbbell_biceps_curl_on_swiss_ball': 1,
        'alternating_incline_dumbbell_biceps_curl': 2,
        'barbell_biceps_curl': 3,
        'barbell_reverse_wrist_curl': 4,
        'barbell_wrist_curl': 5,
        'behind_the_back_barbell_reverse_wrist_curl': 6,
        'behind_the_back_one_arm_cable_curl': 7,
        'cable_biceps_curl': 8,
        'cable_hammer_curl': 9,
        'cheating_barbell_biceps_curl': 10,
        'close_grip_ez_bar_biceps_curl': 11,
        'cross_body_dumbbell_hammer_curl': 12,
        'dead_hang_biceps_curl': 13,
        'decline_hammer_curl': 14,
        'dumbbell_biceps_curl_with_static_hold': 15,
        'dumbbell_hammer_curl': 16,
        'dumbbell_reverse_wrist_curl': 17,
        'dumbbell_wrist_curl': 18,
        'ez_bar_preacher_curl': 19,
        'forward_bend_biceps_curl': 20,
        'hammer_curl_to_press': 21,
        'incline_dumbbell_biceps_curl': 22,
        'incline_offset_thumb_dumbbell_curl': 23,
        'kettlebell_biceps_curl': 24,
        'lying_concentration_cable_curl': 25,
        'one_arm_preacher_curl': 26,
        'plate_pinch_curl': 27,
        'preacher_curl_with_cable': 28,
        'reverse_ez_bar_curl': 29,
        'reverse_grip_wrist_curl': 30,
        'reverse_grip_barbell_biceps_curl': 31,
        'seated_alternating_dumbbell_biceps_curl': 32,
        'seated_dumbbell_biceps_curl': 33,
        'seated_reverse_dumbbell_curl': 34,
        'split_stance_offset_pinky_dumbbell_curl': 35,
        'standing_alternating_dumbbell_curls': 36,
        'standing_dumbbell_biceps_curl': 37,
        'standing_ez_bar_biceps_curl': 38,
        'static_curl': 39,
        'swiss_ball_dumbbell_overhead_triceps_extension': 40,
        'swiss_ball_ez_bar_preacher_curl': 41,
        'twisting_standing_dumbbell_biceps_curl': 42,
        'wide_grip_ez_bar_biceps_curl': 43
    },
    'deadlift_exercise_name': {
        'barbell_deadlift': 0,
        'barbell_straight_leg_deadlift': 1,
        'dumbbell_deadlift': 2,
        'dumbbell_single_leg_deadlift_to_row': 3,
        'dumbbell_straight_leg_deadlift': 4,
        'kettlebell_floor_to_shelf': 5,
        'one_arm_one_leg_deadlift': 6,
        'rack_pull': 7,
        'rotational_dumbbell_straight_leg_deadlift': 8,
        'single_arm_deadlift': 9,
        'single_leg_barbell_deadlift': 10,
        'single_leg_barbell_straight_leg_deadlift': 11,
        'single_leg_deadlift_with_barbell': 12,
        'single_leg_rdl_circuit': 13,
        'single_leg_romanian_deadlift_with_dumbbell': 14,
        'sumo_deadlift': 15,
        'sumo_deadlift_high_pull': 16,
        'trap_bar_deadlift': 17,
        'wide_grip_barbell_deadlift': 18
    },
    'flye_exercise_name': {
        'cable_crossover': 0,
        'decline_dumbbell_flye': 1,
        'dumbbell_flye': 2,
        'incline_dumbbell_flye': 3,
        'kettlebell_flye': 4,
        'kneeling_rear_flye': 5,
        'single_arm_standing_cable_reverse_flye': 6,
        'swiss_ball_dumbbell_flye': 7,
        'arm_rotations': 8,
        'hug_a_tree': 9
    },
    'hip_raise_exercise_name': {
        'barbell_hip_thrust_on_floor': 0,
        'barbell_hip_thrust_with_bench': 1,
        'bent_knee_swiss_ball_reverse_hip_raise': 2,
        'weighted_bent_knee_swiss_ball_reverse_hip_raise': 3,
        'bridge_with_leg_extension': 4,
        'weighted_bridge_with_leg_extension': 5,
        'clam_bridge': 6,
        'front_kick_tabletop': 7,
        'weighted_front_kick_tabletop': 8,
        'hip_extension_and_cross': 9,
        'weighted_hip_extension_and_cross': 10,
        'hip_raise': 11,
        'weighted_hip_raise': 12,
        'hip_raise_with_feet_on_swiss_ball': 13,
        'weighted_hip_raise_with_feet_on_swiss_ball': 14,
        'hip_raise_with_head_on_bosu_ball': 15,
        'weighted_hip_raise_with_head_on_bosu_ball': 16,
        'hip_raise_with_head_on_swiss_ball': 17,
        'weighted_hip_raise_with_head_on_swiss_ball': 18,
        'hip_raise_with_knee_squeeze': 19,
        'weighted_hip_raise_with_knee_squeeze': 20,
        'incline_rear_leg_extension': 21,
        'weighted_incline_rear_leg_extension': 22,
        'kettlebell_swing': 23,
        'marching_hip_raise': 24,
        'weighted_marching_hip_raise': 25,
        'marching_hip_raise_with_feet_on_a_swiss_ball': 26,
        'weighted_marching_hip_raise_with_feet_on_a_swiss_ball': 27,
        'reverse_hip_raise': 28,
        'weighted_reverse_hip_raise': 29,
        'single_leg_hip_raise': 30,
        'weighted_single_leg_hip_raise': 31,
        'single_leg_hip_raise_with_foot_on_bench': 32,
        'weighted_single_leg_hip_raise_with_foot_on_bench': 33,
        'single_leg_hip_raise_with_foot_on_bosu_ball': 34,
        'weighted_single_leg_hip_raise_with_foot_on_bosu_ball': 35,
        'single_leg_hip_raise_with_foot_on_foam_roller': 36,
        'weighted_single_leg_hip_raise_with_foot_on_foam_roller': 37,
        'single_leg_hip_raise_with_foot_on_medicine_ball': 38,
        'weighted_single_leg_hip_raise_with_foot_on_medicine_ball': 39,
        'single_leg_hip_raise_with_head_on_bosu_ball': 40,
        'weighted_single_leg_hip_raise_with_head_on_bosu_ball': 41,
        'weighted_clam_bridge': 42,
        'single_leg_swiss_ball_hip_raise_and_leg_curl': 43,
        'clams': 44,
        'inner_thigh_circles': 45,
        'inner_thigh_side_lift': 46,
        'leg_circles': 47,
        'leg_lift': 48,
        'leg_lift_in_external_rotation': 49
    },
    'hip_stability_exercise_name': {
        'band_side_lying_leg_raise': 0,
        'dead_bug': 1,
        'weighted_dead_bug': 2,
        'external_hip_raise': 3,
        'weighted_external_hip_raise': 4,
        'fire_hydrant_kicks': 5,
        'weighted_fire_hydrant_kicks': 6,
        'hip_circles': 7,
        'weighted_hip_circles': 8,
        'inner_thigh_lift': 9,
        'weighted_inner_thigh_lift': 10,
        'lateral_walks_with_band_at_ankles': 11,
        'pretzel_side_kick': 12,
        'weighted_pretzel_side_kick': 13,
        'prone_hip_internal_rotation': 14,
        'weighted_prone_hip_internal_rotation': 15,
        'quadruped': 16,
        'quadruped_hip_extension': 17,
        'weighted_quadruped_hip_extension': 18,
        'quadruped_with_leg_lift': 19,
        'weighted_quadruped_with_leg_lift': 20,
        'side_lying_leg_raise': 21,
        'weighted_side_lying_leg_raise': 22,
        'sliding_hip_adduction': 23,
        'weighted_sliding_hip_adduction': 24,
        'standing_adduction': 25,
        'weighted_standing_adduction': 26,
        'standing_cable_hip_abduction': 27,
        'standing_hip_abduction': 28,
        'weighted_standing_hip_abduction': 29,
        'standing_rear_leg_raise': 30,
        'weighted_standing_rear_leg_raise': 31,
        'supine_hip_internal_rotation': 32,
        'weighted_supine_hip_internal_rotation': 33
    },
    'hip_swing_excercise_name': { 'single_arm_kettlebell_swing': 0, 'single_arm_dumbbell_swing': 1, 'step_out_swing': 2 },
    'hyperextension_exercise_name': {
        'back_extension_with_opposite_arm_and_leg_reach': 0,
        'weighted_back_extension_with_opposite_arm_and_leg_reach': 1,
        'base_rotations': 2,
        'weighted_base_rotations': 3,
        'bent_knee_reverse_hyperextension': 4,
        'weighted_bent_knee_reverse_hyperextension': 5,
        'hollow_hold_and_roll': 6,
        'weighted_hollow_hold_and_roll': 7,
        'kicks': 8,
        'weighted_kicks': 9,
        'knee_raises': 10,
        'weighted_knee_raises': 11,
        'kneeling_superman': 12,
        'weighted_kneeling_superman': 13,
        'lat_pull_down_with_row': 14,
        'medicine_ball_deadlift_to_reach': 15,
        'one_arm_one_leg_row': 16,
        'one_arm_row_with_band': 17,
        'overhead_lunge_with_medicine_ball': 18,
        'plank_knee_tucks': 19,
        'weighted_plank_knee_tucks': 20,
        'side_step': 21,
        'weighted_side_step': 22,
        'single_leg_back_extension': 23,
        'weighted_single_leg_back_extension': 24,
        'spine_extension': 25,
        'weighted_spine_extension': 26,
        'static_back_extension': 27,
        'weighted_static_back_extension': 28,
        'superman_from_floor': 29,
        'weighted_superman_from_floor': 30,
        'swiss_ball_back_extension': 31,
        'weighted_swiss_ball_back_extension': 32,
        'swiss_ball_hyperextension': 33,
        'weighted_swiss_ball_hyperextension': 34,
        'swiss_ball_opposite_arm_and_leg_lift': 35,
        'weighted_swiss_ball_opposite_arm_and_leg_lift': 36,
        'superman_on_swiss_ball': 37,
        'cobra': 38,
        'supine_floor_barre': 39
    },
    'lateral_raise_exercise_name': {
        '45_degree_cable_external_rotation': 0,
        'alternating_lateral_raise_with_static_hold': 1,
        'bar_muscle_up': 2,
        'bent_over_lateral_raise': 3,
        'cable_diagonal_raise': 4,
        'cable_front_raise': 5,
        'calorie_row': 6,
        'combo_shoulder_raise': 7,
        'dumbbell_diagonal_raise': 8,
        'dumbbell_v_raise': 9,
        'front_raise': 10,
        'leaning_dumbbell_lateral_raise': 11,
        'lying_dumbbell_raise': 12,
        'muscle_up': 13,
        'one_arm_cable_lateral_raise': 14,
        'overhand_grip_rear_lateral_raise': 15,
        'plate_raises': 16,
        'ring_dip': 17,
        'weighted_ring_dip': 18,
        'ring_muscle_up': 19,
        'weighted_ring_muscle_up': 20,
        'rope_climb': 21,
        'weighted_rope_climb': 22,
        'scaption': 23,
        'seated_lateral_raise': 24,
        'seated_rear_lateral_raise': 25,
        'side_lying_lateral_raise': 26,
        'standing_lift': 27,
        'suspended_row': 28,
        'underhand_grip_rear_lateral_raise': 29,
        'wall_slide': 30,
        'weighted_wall_slide': 31,
        'arm_circles': 32,
        'shaving_the_head': 33
    },
    'leg_curl_exercise_name': {
        'leg_curl': 0,
        'weighted_leg_curl': 1,
        'good_morning': 2,
        'seated_barbell_good_morning': 3,
        'single_leg_barbell_good_morning': 4,
        'single_leg_sliding_leg_curl': 5,
        'sliding_leg_curl': 6,
        'split_barbell_good_morning': 7,
        'split_stance_extension': 8,
        'staggered_stance_good_morning': 9,
        'swiss_ball_hip_raise_and_leg_curl': 10,
        'zercher_good_morning': 11
    },
    'leg_raise_exercise_name': {
        'hanging_knee_raise': 0,
        'hanging_leg_raise': 1,
        'weighted_hanging_leg_raise': 2,
        'hanging_single_leg_raise': 3,
        'weighted_hanging_single_leg_raise': 4,
        'kettlebell_leg_raises': 5,
        'leg_lowering_drill': 6,
        'weighted_leg_lowering_drill': 7,
        'lying_straight_leg_raise': 8,
        'weighted_lying_straight_leg_raise': 9,
        'medicine_ball_leg_drops': 10,
        'quadruped_leg_raise': 11,
        'weighted_quadruped_leg_raise': 12,
        'reverse_leg_raise': 13,
        'weighted_reverse_leg_raise': 14,
        'reverse_leg_raise_on_swiss_ball': 15,
        'weighted_reverse_leg_raise_on_swiss_ball': 16,
        'single_leg_lowering_drill': 17,
        'weighted_single_leg_lowering_drill': 18,
        'weighted_hanging_knee_raise': 19,
        'lateral_stepover': 20,
        'weighted_lateral_stepover': 21
    },
    'lunge_exercise_name': {
        'overhead_lunge': 0,
        'lunge_matrix': 1,
        'weighted_lunge_matrix': 2,
        'alternating_barbell_forward_lunge': 3,
        'alternating_dumbbell_lunge_with_reach': 4,
        'back_foot_elevated_dumbbell_split_squat': 5,
        'barbell_box_lunge': 6,
        'barbell_bulgarian_split_squat': 7,
        'barbell_crossover_lunge': 8,
        'barbell_front_split_squat': 9,
        'barbell_lunge': 10,
        'barbell_reverse_lunge': 11,
        'barbell_side_lunge': 12,
        'barbell_split_squat': 13,
        'core_control_rear_lunge': 14,
        'diagonal_lunge': 15,
        'drop_lunge': 16,
        'dumbbell_box_lunge': 17,
        'dumbbell_bulgarian_split_squat': 18,
        'dumbbell_crossover_lunge': 19,
        'dumbbell_diagonal_lunge': 20,
        'dumbbell_lunge': 21,
        'dumbbell_lunge_and_rotation': 22,
        'dumbbell_overhead_bulgarian_split_squat': 23,
        'dumbbell_reverse_lunge_to_high_knee_and_press': 24,
        'dumbbell_side_lunge': 25,
        'elevated_front_foot_barbell_split_squat': 26,
        'front_foot_elevated_dumbbell_split_squat': 27,
        'gunslinger_lunge': 28,
        'lawnmower_lunge': 29,
        'low_lunge_with_isometric_adduction': 30,
        'low_side_to_side_lunge': 31,
        'lunge': 32,
        'weighted_lunge': 33,
        'lunge_with_arm_reach': 34,
        'lunge_with_diagonal_reach': 35,
        'lunge_with_side_bend': 36,
        'offset_dumbbell_lunge': 37,
        'offset_dumbbell_reverse_lunge': 38,
        'overhead_bulgarian_split_squat': 39,
        'overhead_dumbbell_reverse_lunge': 40,
        'overhead_dumbbell_split_squat': 41,
        'overhead_lunge_with_rotation': 42,
        'reverse_barbell_box_lunge': 43,
        'reverse_box_lunge': 44,
        'reverse_dumbbell_box_lunge': 45,
        'reverse_dumbbell_crossover_lunge': 46,
        'reverse_dumbbell_diagonal_lunge': 47,
        'reverse_lunge_with_reach_back': 48,
        'weighted_reverse_lunge_with_reach_back': 49,
        'reverse_lunge_with_twist_and_overhead_reach': 50,
        'weighted_reverse_lunge_with_twist_and_overhead_reach': 51,
        'reverse_sliding_box_lunge': 52,
        'weighted_reverse_sliding_box_lunge': 53,
        'reverse_sliding_lunge': 54,
        'weighted_reverse_sliding_lunge': 55,
        'runners_lunge_to_balance': 56,
        'weighted_runners_lunge_to_balance': 57,
        'shifting_side_lunge': 58,
        'side_and_crossover_lunge': 59,
        'weighted_side_and_crossover_lunge': 60,
        'side_lunge': 61,
        'weighted_side_lunge': 62,
        'side_lunge_and_press': 63,
        'side_lunge_jump_off': 64,
        'side_lunge_sweep': 65,
        'weighted_side_lunge_sweep': 66,
        'side_lunge_to_crossover_tap': 67,
        'weighted_side_lunge_to_crossover_tap': 68,
        'side_to_side_lunge_chops': 69,
        'weighted_side_to_side_lunge_chops': 70,
        'siff_jump_lunge': 71,
        'weighted_siff_jump_lunge': 72,
        'single_arm_reverse_lunge_and_press': 73,
        'sliding_lateral_lunge': 74,
        'weighted_sliding_lateral_lunge': 75,
        'walking_barbell_lunge': 76,
        'walking_dumbbell_lunge': 77,
        'walking_lunge': 78,
        'weighted_walking_lunge': 79,
        'wide_grip_overhead_barbell_split_squat': 80
    },
    'olympic_lift_exercise_name': {
        'barbell_hang_power_clean': 0,
        'barbell_hang_squat_clean': 1,
        'barbell_power_clean': 2,
        'barbell_power_snatch': 3,
        'barbell_squat_clean': 4,
        'clean_and_jerk': 5,
        'barbell_hang_power_snatch': 6,
        'barbell_hang_pull': 7,
        'barbell_high_pull': 8,
        'barbell_snatch': 9,
        'barbell_split_jerk': 10,
        'clean': 11,
        'dumbbell_clean': 12,
        'dumbbell_hang_pull': 13,
        'one_hand_dumbbell_split_snatch': 14,
        'push_jerk': 15,
        'single_arm_dumbbell_snatch': 16,
        'single_arm_hang_snatch': 17,
        'single_arm_kettlebell_snatch': 18,
        'split_jerk': 19,
        'squat_clean_and_jerk': 20
    },
    'plank_exercise_name': {
        '45_degree_plank': 0,
        'weighted_45_degree_plank': 1,
        '90_degree_static_hold': 2,
        'weighted_90_degree_static_hold': 3,
        'bear_crawl': 4,
        'weighted_bear_crawl': 5,
        'cross_body_mountain_climber': 6,
        'weighted_cross_body_mountain_climber': 7,
        'elbow_plank_pike_jacks': 8,
        'weighted_elbow_plank_pike_jacks': 9,
        'elevated_feet_plank': 10,
        'weighted_elevated_feet_plank': 11,
        'elevator_abs': 12,
        'weighted_elevator_abs': 13,
        'extended_plank': 14,
        'weighted_extended_plank': 15,
        'full_plank_passe_twist': 16,
        'weighted_full_plank_passe_twist': 17,
        'inching_elbow_plank': 18,
        'weighted_inching_elbow_plank': 19,
        'inchworm_to_side_plank': 20,
        'weighted_inchworm_to_side_plank': 21,
        'kneeling_plank': 22,
        'weighted_kneeling_plank': 23,
        'kneeling_side_plank_with_leg_lift': 24,
        'weighted_kneeling_side_plank_with_leg_lift': 25,
        'lateral_roll': 26,
        'weighted_lateral_roll': 27,
        'lying_reverse_plank': 28,
        'weighted_lying_reverse_plank': 29,
        'medicine_ball_mountain_climber': 30,
        'weighted_medicine_ball_mountain_climber': 31,
        'modified_mountain_climber_and_extension': 32,
        'weighted_modified_mountain_climber_and_extension': 33,
        'mountain_climber': 34,
        'weighted_mountain_climber': 35,
        'mountain_climber_on_sliding_discs': 36,
        'weighted_mountain_climber_on_sliding_discs': 37,
        'mountain_climber_with_feet_on_bosu_ball': 38,
        'weighted_mountain_climber_with_feet_on_bosu_ball': 39,
        'mountain_climber_with_hands_on_bench': 40,
        'mountain_climber_with_hands_on_swiss_ball': 41,
        'weighted_mountain_climber_with_hands_on_swiss_ball': 42,
        'plank': 43,
        'plank_jacks_with_feet_on_sliding_discs': 44,
        'weighted_plank_jacks_with_feet_on_sliding_discs': 45,
        'plank_knee_twist': 46,
        'weighted_plank_knee_twist': 47,
        'plank_pike_jumps': 48,
        'weighted_plank_pike_jumps': 49,
        'plank_pikes': 50,
        'weighted_plank_pikes': 51,
        'plank_to_stand_up': 52,
        'weighted_plank_to_stand_up': 53,
        'plank_with_arm_raise': 54,
        'weighted_plank_with_arm_raise': 55,
        'plank_with_knee_to_elbow': 56,
        'weighted_plank_with_knee_to_elbow': 57,
        'plank_with_oblique_crunch': 58,
        'weighted_plank_with_oblique_crunch': 59,
        'plyometric_side_plank': 60,
        'weighted_plyometric_side_plank': 61,
        'rolling_side_plank': 62,
        'weighted_rolling_side_plank': 63,
        'side_kick_plank': 64,
        'weighted_side_kick_plank': 65,
        'side_plank': 66,
        'weighted_side_plank': 67,
        'side_plank_and_row': 68,
        'weighted_side_plank_and_row': 69,
        'side_plank_lift': 70,
        'weighted_side_plank_lift': 71,
        'side_plank_with_elbow_on_bosu_ball': 72,
        'weighted_side_plank_with_elbow_on_bosu_ball': 73,
        'side_plank_with_feet_on_bench': 74,
        'weighted_side_plank_with_feet_on_bench': 75,
        'side_plank_with_knee_circle': 76,
        'weighted_side_plank_with_knee_circle': 77,
        'side_plank_with_knee_tuck': 78,
        'weighted_side_plank_with_knee_tuck': 79,
        'side_plank_with_leg_lift': 80,
        'weighted_side_plank_with_leg_lift': 81,
        'side_plank_with_reach_under': 82,
        'weighted_side_plank_with_reach_under': 83,
        'single_leg_elevated_feet_plank': 84,
        'weighted_single_leg_elevated_feet_plank': 85,
        'single_leg_flex_and_extend': 86,
        'weighted_single_leg_flex_and_extend': 87,
        'single_leg_side_plank': 88,
        'weighted_single_leg_side_plank': 89,
        'spiderman_plank': 90,
        'weighted_spiderman_plank': 91,
        'straight_arm_plank': 92,
        'weighted_straight_arm_plank': 93,
        'straight_arm_plank_with_shoulder_touch': 94,
        'weighted_straight_arm_plank_with_shoulder_touch': 95,
        'swiss_ball_plank': 96,
        'weighted_swiss_ball_plank': 97,
        'swiss_ball_plank_leg_lift': 98,
        'weighted_swiss_ball_plank_leg_lift': 99,
        'swiss_ball_plank_leg_lift_and_hold': 100,
        'swiss_ball_plank_with_feet_on_bench': 101,
        'weighted_swiss_ball_plank_with_feet_on_bench': 102,
        'swiss_ball_prone_jackknife': 103,
        'weighted_swiss_ball_prone_jackknife': 104,
        'swiss_ball_side_plank': 105,
        'weighted_swiss_ball_side_plank': 106,
        'three_way_plank': 107,
        'weighted_three_way_plank': 108,
        'towel_plank_and_knee_in': 109,
        'weighted_towel_plank_and_knee_in': 110,
        't_stabilization': 111,
        'weighted_t_stabilization': 112,
        'turkish_get_up_to_side_plank': 113,
        'weighted_turkish_get_up_to_side_plank': 114,
        'two_point_plank': 115,
        'weighted_two_point_plank': 116,
        'weighted_plank': 117,
        'wide_stance_plank_with_diagonal_arm_lift': 118,
        'weighted_wide_stance_plank_with_diagonal_arm_lift': 119,
        'wide_stance_plank_with_diagonal_leg_lift': 120,
        'weighted_wide_stance_plank_with_diagonal_leg_lift': 121,
        'wide_stance_plank_with_leg_lift': 122,
        'weighted_wide_stance_plank_with_leg_lift': 123,
        'wide_stance_plank_with_opposite_arm_and_leg_lift': 124,
        'weighted_mountain_climber_with_hands_on_bench': 125,
        'weighted_swiss_ball_plank_leg_lift_and_hold': 126,
        'weighted_wide_stance_plank_with_opposite_arm_and_leg_lift': 127,
        'plank_with_feet_on_swiss_ball': 128,
        'side_plank_to_plank_with_reach_under': 129,
        'bridge_with_glute_lower_lift': 130,
        'bridge_one_leg_bridge': 131,
        'plank_with_arm_variations': 132,
        'plank_with_leg_lift': 133,
        'reverse_plank_with_leg_pull': 134
    },
    'plyo_exercise_name': {
        'alternating_jump_lunge': 0,
        'weighted_alternating_jump_lunge': 1,
        'barbell_jump_squat': 2,
        'body_weight_jump_squat': 3,
        'weighted_jump_squat': 4,
        'cross_knee_strike': 5,
        'weighted_cross_knee_strike': 6,
        'depth_jump': 7,
        'weighted_depth_jump': 8,
        'dumbbell_jump_squat': 9,
        'dumbbell_split_jump': 10,
        'front_knee_strike': 11,
        'weighted_front_knee_strike': 12,
        'high_box_jump': 13,
        'weighted_high_box_jump': 14,
        'isometric_explosive_body_weight_jump_squat': 15,
        'weighted_isometric_explosive_jump_squat': 16,
        'lateral_leap_and_hop': 17,
        'weighted_lateral_leap_and_hop': 18,
        'lateral_plyo_squats': 19,
        'weighted_lateral_plyo_squats': 20,
        'lateral_slide': 21,
        'weighted_lateral_slide': 22,
        'medicine_ball_overhead_throws': 23,
        'medicine_ball_side_throw': 24,
        'medicine_ball_slam': 25,
        'side_to_side_medicine_ball_throws': 26,
        'side_to_side_shuffle_jump': 27,
        'weighted_side_to_side_shuffle_jump': 28,
        'squat_jump_onto_box': 29,
        'weighted_squat_jump_onto_box': 30,
        'squat_jumps_in_and_out': 31,
        'weighted_squat_jumps_in_and_out': 32
    },
    'pull_up_exercise_name': {
        'banded_pull_ups': 0,
        '30_degree_lat_pulldown': 1,
        'band_assisted_chin_up': 2,
        'close_grip_chin_up': 3,
        'weighted_close_grip_chin_up': 4,
        'close_grip_lat_pulldown': 5,
        'crossover_chin_up': 6,
        'weighted_crossover_chin_up': 7,
        'ez_bar_pullover': 8,
        'hanging_hurdle': 9,
        'weighted_hanging_hurdle': 10,
        'kneeling_lat_pulldown': 11,
        'kneeling_underhand_grip_lat_pulldown': 12,
        'lat_pulldown': 13,
        'mixed_grip_chin_up': 14,
        'weighted_mixed_grip_chin_up': 15,
        'mixed_grip_pull_up': 16,
        'weighted_mixed_grip_pull_up': 17,
        'reverse_grip_pulldown': 18,
        'standing_cable_pullover': 19,
        'straight_arm_pulldown': 20,
        'swiss_ball_ez_bar_pullover': 21,
        'towel_pull_up': 22,
        'weighted_towel_pull_up': 23,
        'weighted_pull_up': 24,
        'wide_grip_lat_pulldown': 25,
        'wide_grip_pull_up': 26,
        'weighted_wide_grip_pull_up': 27,
        'burpee_pull_up': 28,
        'weighted_burpee_pull_up': 29,
        'jumping_pull_ups': 30,
        'weighted_jumping_pull_ups': 31,
        'kipping_pull_up': 32,
        'weighted_kipping_pull_up': 33,
        'l_pull_up': 34,
        'weighted_l_pull_up': 35,
        'suspended_chin_up': 36,
        'weighted_suspended_chin_up': 37,
        'pull_up': 38
    },
    'push_up_exercise_name': {
        'chest_press_with_band': 0,
        'alternating_staggered_push_up': 1,
        'weighted_alternating_staggered_push_up': 2,
        'alternating_hands_medicine_ball_push_up': 3,
        'weighted_alternating_hands_medicine_ball_push_up': 4,
        'bosu_ball_push_up': 5,
        'weighted_bosu_ball_push_up': 6,
        'clapping_push_up': 7,
        'weighted_clapping_push_up': 8,
        'close_grip_medicine_ball_push_up': 9,
        'weighted_close_grip_medicine_ball_push_up': 10,
        'close_hands_push_up': 11,
        'weighted_close_hands_push_up': 12,
        'decline_push_up': 13,
        'weighted_decline_push_up': 14,
        'diamond_push_up': 15,
        'weighted_diamond_push_up': 16,
        'explosive_crossover_push_up': 17,
        'weighted_explosive_crossover_push_up': 18,
        'explosive_push_up': 19,
        'weighted_explosive_push_up': 20,
        'feet_elevated_side_to_side_push_up': 21,
        'weighted_feet_elevated_side_to_side_push_up': 22,
        'hand_release_push_up': 23,
        'weighted_hand_release_push_up': 24,
        'handstand_push_up': 25,
        'weighted_handstand_push_up': 26,
        'incline_push_up': 27,
        'weighted_incline_push_up': 28,
        'isometric_explosive_push_up': 29,
        'weighted_isometric_explosive_push_up': 30,
        'judo_push_up': 31,
        'weighted_judo_push_up': 32,
        'kneeling_push_up': 33,
        'weighted_kneeling_push_up': 34,
        'medicine_ball_chest_pass': 35,
        'medicine_ball_push_up': 36,
        'weighted_medicine_ball_push_up': 37,
        'one_arm_push_up': 38,
        'weighted_one_arm_push_up': 39,
        'weighted_push_up': 40,
        'push_up_and_row': 41,
        'weighted_push_up_and_row': 42,
        'push_up_plus': 43,
        'weighted_push_up_plus': 44,
        'push_up_with_feet_on_swiss_ball': 45,
        'weighted_push_up_with_feet_on_swiss_ball': 46,
        'push_up_with_one_hand_on_medicine_ball': 47,
        'weighted_push_up_with_one_hand_on_medicine_ball': 48,
        'shoulder_push_up': 49,
        'weighted_shoulder_push_up': 50,
        'single_arm_medicine_ball_push_up': 51,
        'weighted_single_arm_medicine_ball_push_up': 52,
        'spiderman_push_up': 53,
        'weighted_spiderman_push_up': 54,
        'stacked_feet_push_up': 55,
        'weighted_stacked_feet_push_up': 56,
        'staggered_hands_push_up': 57,
        'weighted_staggered_hands_push_up': 58,
        'suspended_push_up': 59,
        'weighted_suspended_push_up': 60,
        'swiss_ball_push_up': 61,
        'weighted_swiss_ball_push_up': 62,
        'swiss_ball_push_up_plus': 63,
        'weighted_swiss_ball_push_up_plus': 64,
        't_push_up': 65,
        'weighted_t_push_up': 66,
        'triple_stop_push_up': 67,
        'weighted_triple_stop_push_up': 68,
        'wide_hands_push_up': 69,
        'weighted_wide_hands_push_up': 70,
        'parallette_handstand_push_up': 71,
        'weighted_parallette_handstand_push_up': 72,
        'ring_handstand_push_up': 73,
        'weighted_ring_handstand_push_up': 74,
        'ring_push_up': 75,
        'weighted_ring_push_up': 76,
        'push_up': 77,
        'pilates_pushup': 78
    },
    'row_exercise_name': {
        'barbell_straight_leg_deadlift_to_row': 0,
        'cable_row_standing': 1,
        'dumbbell_row': 2,
        'elevated_feet_inverted_row': 3,
        'weighted_elevated_feet_inverted_row': 4,
        'face_pull': 5,
        'face_pull_with_external_rotation': 6,
        'inverted_row_with_feet_on_swiss_ball': 7,
        'weighted_inverted_row_with_feet_on_swiss_ball': 8,
        'kettlebell_row': 9,
        'modified_inverted_row': 10,
        'weighted_modified_inverted_row': 11,
        'neutral_grip_alternating_dumbbell_row': 12,
        'one_arm_bent_over_row': 13,
        'one_legged_dumbbell_row': 14,
        'renegade_row': 15,
        'reverse_grip_barbell_row': 16,
        'rope_handle_cable_row': 17,
        'seated_cable_row': 18,
        'seated_dumbbell_row': 19,
        'single_arm_cable_row': 20,
        'single_arm_cable_row_and_rotation': 21,
        'single_arm_inverted_row': 22,
        'weighted_single_arm_inverted_row': 23,
        'single_arm_neutral_grip_dumbbell_row': 24,
        'single_arm_neutral_grip_dumbbell_row_and_rotation': 25,
        'suspended_inverted_row': 26,
        'weighted_suspended_inverted_row': 27,
        't_bar_row': 28,
        'towel_grip_inverted_row': 29,
        'weighted_towel_grip_inverted_row': 30,
        'underhand_grip_cable_row': 31,
        'v_grip_cable_row': 32,
        'wide_grip_seated_cable_row': 33
    },
    'shoulder_press_exercise_name': {
        'alternating_dumbbell_shoulder_press': 0,
        'arnold_press': 1,
        'barbell_front_squat_to_push_press': 2,
        'barbell_push_press': 3,
        'barbell_shoulder_press': 4,
        'dead_curl_press': 5,
        'dumbbell_alternating_shoulder_press_and_twist': 6,
        'dumbbell_hammer_curl_to_lunge_to_press': 7,
        'dumbbell_push_press': 8,
        'floor_inverted_shoulder_press': 9,
        'weighted_floor_inverted_shoulder_press': 10,
        'inverted_shoulder_press': 11,
        'weighted_inverted_shoulder_press': 12,
        'one_arm_push_press': 13,
        'overhead_barbell_press': 14,
        'overhead_dumbbell_press': 15,
        'seated_barbell_shoulder_press': 16,
        'seated_dumbbell_shoulder_press': 17,
        'single_arm_dumbbell_shoulder_press': 18,
        'single_arm_step_up_and_press': 19,
        'smith_machine_overhead_press': 20,
        'split_stance_hammer_curl_to_press': 21,
        'swiss_ball_dumbbell_shoulder_press': 22,
        'weight_plate_front_raise': 23
    },
    'shoulder_stability_exercise_name': {
        '90_degree_cable_external_rotation': 0,
        'band_external_rotation': 1,
        'band_internal_rotation': 2,
        'bent_arm_lateral_raise_and_external_rotation': 3,
        'cable_external_rotation': 4,
        'dumbbell_face_pull_with_external_rotation': 5,
        'floor_i_raise': 6,
        'weighted_floor_i_raise': 7,
        'floor_t_raise': 8,
        'weighted_floor_t_raise': 9,
        'floor_y_raise': 10,
        'weighted_floor_y_raise': 11,
        'incline_i_raise': 12,
        'weighted_incline_i_raise': 13,
        'incline_l_raise': 14,
        'weighted_incline_l_raise': 15,
        'incline_t_raise': 16,
        'weighted_incline_t_raise': 17,
        'incline_w_raise': 18,
        'weighted_incline_w_raise': 19,
        'incline_y_raise': 20,
        'weighted_incline_y_raise': 21,
        'lying_external_rotation': 22,
        'seated_dumbbell_external_rotation': 23,
        'standing_l_raise': 24,
        'swiss_ball_i_raise': 25,
        'weighted_swiss_ball_i_raise': 26,
        'swiss_ball_t_raise': 27,
        'weighted_swiss_ball_t_raise': 28,
        'swiss_ball_w_raise': 29,
        'weighted_swiss_ball_w_raise': 30,
        'swiss_ball_y_raise': 31,
        'weighted_swiss_ball_y_raise': 32
    },
    'shrug_exercise_name': {
        'barbell_jump_shrug': 0,
        'barbell_shrug': 1,
        'barbell_upright_row': 2,
        'behind_the_back_smith_machine_shrug': 3,
        'dumbbell_jump_shrug': 4,
        'dumbbell_shrug': 5,
        'dumbbell_upright_row': 6,
        'incline_dumbbell_shrug': 7,
        'overhead_barbell_shrug': 8,
        'overhead_dumbbell_shrug': 9,
        'scaption_and_shrug': 10,
        'scapular_retraction': 11,
        'serratus_chair_shrug': 12,
        'weighted_serratus_chair_shrug': 13,
        'serratus_shrug': 14,
        'weighted_serratus_shrug': 15,
        'wide_grip_jump_shrug': 16
    },
    'sit_up_exercise_name': {
        'alternating_sit_up': 0,
        'weighted_alternating_sit_up': 1,
        'bent_knee_v_up': 2,
        'weighted_bent_knee_v_up': 3,
        'butterfly_sit_up': 4,
        'weighted_butterfly_situp': 5,
        'cross_punch_roll_up': 6,
        'weighted_cross_punch_roll_up': 7,
        'crossed_arms_sit_up': 8,
        'weighted_crossed_arms_sit_up': 9,
        'get_up_sit_up': 10,
        'weighted_get_up_sit_up': 11,
        'hovering_sit_up': 12,
        'weighted_hovering_sit_up': 13,
        'kettlebell_sit_up': 14,
        'medicine_ball_alternating_v_up': 15,
        'medicine_ball_sit_up': 16,
        'medicine_ball_v_up': 17,
        'modified_sit_up': 18,
        'negative_sit_up': 19,
        'one_arm_full_sit_up': 20,
        'reclining_circle': 21,
        'weighted_reclining_circle': 22,
        'reverse_curl_up': 23,
        'weighted_reverse_curl_up': 24,
        'single_leg_swiss_ball_jackknife': 25,
        'weighted_single_leg_swiss_ball_jackknife': 26,
        'the_teaser': 27,
        'the_teaser_weighted': 28,
        'three_part_roll_down': 29,
        'weighted_three_part_roll_down': 30,
        'v_up': 31,
        'weighted_v_up': 32,
        'weighted_russian_twist_on_swiss_ball': 33,
        'weighted_sit_up': 34,
        'x_abs': 35,
        'weighted_x_abs': 36,
        'sit_up': 37
    },
    'squat_exercise_name': {
        'leg_press': 0,
        'back_squat_with_body_bar': 1,
        'back_squats': 2,
        'weighted_back_squats': 3,
        'balancing_squat': 4,
        'weighted_balancing_squat': 5,
        'barbell_back_squat': 6,
        'barbell_box_squat': 7,
        'barbell_front_squat': 8,
        'barbell_hack_squat': 9,
        'barbell_hang_squat_snatch': 10,
        'barbell_lateral_step_up': 11,
        'barbell_quarter_squat': 12,
        'barbell_siff_squat': 13,
        'barbell_squat_snatch': 14,
        'barbell_squat_with_heels_raised': 15,
        'barbell_stepover': 16,
        'barbell_step_up': 17,
        'bench_squat_with_rotational_chop': 18,
        'weighted_bench_squat_with_rotational_chop': 19,
        'body_weight_wall_squat': 20,
        'weighted_wall_squat': 21,
        'box_step_squat': 22,
        'weighted_box_step_squat': 23,
        'braced_squat': 24,
        'crossed_arm_barbell_front_squat': 25,
        'crossover_dumbbell_step_up': 26,
        'dumbbell_front_squat': 27,
        'dumbbell_split_squat': 28,
        'dumbbell_squat': 29,
        'dumbbell_squat_clean': 30,
        'dumbbell_stepover': 31,
        'dumbbell_step_up': 32,
        'elevated_single_leg_squat': 33,
        'weighted_elevated_single_leg_squat': 34,
        'figure_four_squats': 35,
        'weighted_figure_four_squats': 36,
        'goblet_squat': 37,
        'kettlebell_squat': 38,
        'kettlebell_swing_overhead': 39,
        'kettlebell_swing_with_flip_to_squat': 40,
        'lateral_dumbbell_step_up': 41,
        'one_legged_squat': 42,
        'overhead_dumbbell_squat': 43,
        'overhead_squat': 44,
        'partial_single_leg_squat': 45,
        'weighted_partial_single_leg_squat': 46,
        'pistol_squat': 47,
        'weighted_pistol_squat': 48,
        'plie_slides': 49,
        'weighted_plie_slides': 50,
        'plie_squat': 51,
        'weighted_plie_squat': 52,
        'prisoner_squat': 53,
        'weighted_prisoner_squat': 54,
        'single_leg_bench_get_up': 55,
        'weighted_single_leg_bench_get_up': 56,
        'single_leg_bench_squat': 57,
        'weighted_single_leg_bench_squat': 58,
        'single_leg_squat_on_swiss_ball': 59,
        'weighted_single_leg_squat_on_swiss_ball': 60,
        'squat': 61,
        'weighted_squat': 62,
        'squats_with_band': 63,
        'staggered_squat': 64,
        'weighted_staggered_squat': 65,
        'step_up': 66,
        'weighted_step_up': 67,
        'suitcase_squats': 68,
        'sumo_squat': 69,
        'sumo_squat_slide_in': 70,
        'weighted_sumo_squat_slide_in': 71,
        'sumo_squat_to_high_pull': 72,
        'sumo_squat_to_stand': 73,
        'weighted_sumo_squat_to_stand': 74,
        'sumo_squat_with_rotation': 75,
        'weighted_sumo_squat_with_rotation': 76,
        'swiss_ball_body_weight_wall_squat': 77,
        'weighted_swiss_ball_wall_squat': 78,
        'thrusters': 79,
        'uneven_squat': 80,
        'weighted_uneven_squat': 81,
        'waist_slimming_squat': 82,
        'wall_ball': 83,
        'wide_stance_barbell_squat': 84,
        'wide_stance_goblet_squat': 85,
        'zercher_squat': 86,
        'kbs_overhead': 87,
        'squat_and_side_kick': 88,
        'squat_jumps_in_n_out': 89,
        'pilates_plie_squats_parallel_turned_out_flat_and_heels': 90,
        'releve_straight_leg_and_knee_bent_with_one_leg_variation': 91
    },
    'total_body_exercise_name': {
        'burpee': 0,
        'weighted_burpee': 1,
        'burpee_box_jump': 2,
        'weighted_burpee_box_jump': 3,
        'high_pull_burpee': 4,
        'man_makers': 5,
        'one_arm_burpee': 6,
        'squat_thrusts': 7,
        'weighted_squat_thrusts': 8,
        'squat_plank_push_up': 9,
        'weighted_squat_plank_push_up': 10,
        'standing_t_rotation_balance': 11,
        'weighted_standing_t_rotation_balance': 12
    },
    'triceps_extension_exercise_name': {
        'bench_dip': 0,
        'weighted_bench_dip': 1,
        'body_weight_dip': 2,
        'cable_kickback': 3,
        'cable_lying_triceps_extension': 4,
        'cable_overhead_triceps_extension': 5,
        'dumbbell_kickback': 6,
        'dumbbell_lying_triceps_extension': 7,
        'ez_bar_overhead_triceps_extension': 8,
        'incline_dip': 9,
        'weighted_incline_dip': 10,
        'incline_ez_bar_lying_triceps_extension': 11,
        'lying_dumbbell_pullover_to_extension': 12,
        'lying_ez_bar_triceps_extension': 13,
        'lying_triceps_extension_to_close_grip_bench_press': 14,
        'overhead_dumbbell_triceps_extension': 15,
        'reclining_triceps_press': 16,
        'reverse_grip_pressdown': 17,
        'reverse_grip_triceps_pressdown': 18,
        'rope_pressdown': 19,
        'seated_barbell_overhead_triceps_extension': 20,
        'seated_dumbbell_overhead_triceps_extension': 21,
        'seated_ez_bar_overhead_triceps_extension': 22,
        'seated_single_arm_overhead_dumbbell_extension': 23,
        'single_arm_dumbbell_overhead_triceps_extension': 24,
        'single_dumbbell_seated_overhead_triceps_extension': 25,
        'single_leg_bench_dip_and_kick': 26,
        'weighted_single_leg_bench_dip_and_kick': 27,
        'single_leg_dip': 28,
        'weighted_single_leg_dip': 29,
        'static_lying_triceps_extension': 30,
        'suspended_dip': 31,
        'weighted_suspended_dip': 32,
        'swiss_ball_dumbbell_lying_triceps_extension': 33,
        'swiss_ball_ez_bar_lying_triceps_extension': 34,
        'swiss_ball_ez_bar_overhead_triceps_extension': 35,
        'tabletop_dip': 36,
        'weighted_tabletop_dip': 37,
        'triceps_extension_on_floor': 38,
        'triceps_pressdown': 39,
        'weighted_dip': 40
    },
    'warm_up_exercise_name': {
        'quadruped_rocking': 0,
        'neck_tilts': 1,
        'ankle_circles': 2,
        'ankle_dorsiflexion_with_band': 3,
        'ankle_internal_rotation': 4,
        'arm_circles': 5,
        'bent_over_reach_to_sky': 6,
        'cat_camel': 7,
        'elbow_to_foot_lunge': 8,
        'forward_and_backward_leg_swings': 9,
        'groiners': 10,
        'inverted_hamstring_stretch': 11,
        'lateral_duck_under': 12,
        'neck_rotations': 13,
        'opposite_arm_and_leg_balance': 14,
        'reach_roll_and_lift': 15,
        'scorpion': 16,
        'shoulder_circles': 17,
        'side_to_side_leg_swings': 18,
        'sleeper_stretch': 19,
        'slide_out': 20,
        'swiss_ball_hip_crossover': 21,
        'swiss_ball_reach_roll_and_lift': 22,
        'swiss_ball_windshield_wipers': 23,
        'thoracic_rotation': 24,
        'walking_high_kicks': 25,
        'walking_high_knees': 26,
        'walking_knee_hugs': 27,
        'walking_leg_cradles': 28,
        'walkout': 29,
        'walkout_from_push_up_position': 30
    },
    'run_exercise_name': { 'run': 0, 'walk': 1, 'jog': 2, 'sprint': 3 },
    'water_type': { 'fresh': 0, 'salt': 1, 'en13319': 2, 'custom': 3 },
    'tissue_model_type': { 'zhl_16c': 0 },
    'dive_gas_status': { 'disabled': 0, 'enabled': 1, 'backup_only': 2 },
    'dive_alarm_type': { 'depth': 0, 'time': 1 },
    'dive_backlight_mode': { 'at_depth': 0, 'always_on': 1 },
    'favero_product': { 'assioma_uno': 10, 'assioma_duo': 12 }
};

var sint8 = {
    size: 1,
    baseType: 1,
    setValue: DataView.prototype.setInt8
};
var uint8 = {
    size: 1,
    baseType: 2,
    setValue: DataView.prototype.setUint8
};
var sint16 = {
    size: 2,
    baseType: 0x83,
    setValue: DataView.prototype.setInt16
};
var uint16 = {
    size: 2,
    baseType: 0x84,
    setValue: DataView.prototype.setUint16
};
var sint32 = {
    size: 4,
    baseType: 0x85,
    setValue: DataView.prototype.setInt32
};
var uint32 = {
    size: 4,
    baseType: 0x86,
    setValue: DataView.prototype.setUint32
};
var string = {
    size: 0,
    baseType: 7,
    mapValue: function (value) { return Array.from(encodedStr(value)); },
    setValue: dvSetUint8Array
};
var distance = __assign(__assign({}, uint32), { mapValue: function (value) { return Math.round(value * 100); } });
var date_time = __assign(__assign({}, uint32), { mapValue: function (value) { return Math.round(value / 1000) - 631065600; } // "1989-12-31T00:00"
 });
var types = Object.keys(typeMaps).reduce(function (res, k) {
    res[k] = typeDescriptor(k);
    return res;
}, {});
Object.assign(types, {
    sint8: sint8,
    uint8: uint8,
    sint16: sint16,
    uint16: uint16,
    sint32: sint32,
    uint32: uint32,
    string: string,
    distance: distance,
    date_time: date_time
});
function getTypeDescriptor(type) {
    return types[type];
}
function dvSetUint8Array(offset, values) {
    var dv = this;
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var value = values_1[_i];
        dv.setUint8(offset++, value);
    }
}
function encodedStrSize(str) {
    return Array.from(encodedStr(str)).length;
}
function encodedStr(s) {
    var _i, _a, codePoint, bytes;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _i = 0, _a = codePoints(s);
                _b.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 16];
                codePoint = _a[_i];
                if (!(codePoint < 0x80)) return [3 /*break*/, 3];
                return [4 /*yield*/, codePoint];
            case 2:
                _b.sent();
                return [3 /*break*/, 15];
            case 3:
                bytes = [codePoint & 0x3f, (codePoint >> 6) & 0x3f, (codePoint >> 12) & 0x3f, codePoint >> 18];
                if (!(codePoint < 0x800)) return [3 /*break*/, 6];
                return [4 /*yield*/, 0xc0 | bytes[1]];
            case 4:
                _b.sent();
                return [4 /*yield*/, 0x80 | bytes[0]];
            case 5:
                _b.sent();
                return [3 /*break*/, 15];
            case 6:
                if (!(codePoint < 0x10000)) return [3 /*break*/, 10];
                return [4 /*yield*/, 0xe0 | bytes[2]];
            case 7:
                _b.sent();
                return [4 /*yield*/, 0x80 | bytes[1]];
            case 8:
                _b.sent();
                return [4 /*yield*/, 0x80 | bytes[0]];
            case 9:
                _b.sent();
                return [3 /*break*/, 15];
            case 10: return [4 /*yield*/, 0xf0 | bytes[3]];
            case 11:
                _b.sent();
                return [4 /*yield*/, 0x80 | bytes[2]];
            case 12:
                _b.sent();
                return [4 /*yield*/, 0x80 | bytes[1]];
            case 13:
                _b.sent();
                return [4 /*yield*/, 0x80 | bytes[0]];
            case 14:
                _b.sent();
                _b.label = 15;
            case 15:
                _i++;
                return [3 /*break*/, 1];
            case 16: return [4 /*yield*/, 0];
            case 17:
                _b.sent();
                return [2 /*return*/];
        }
    });
}
function codePoints(s) {
    var i, codePoint;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < s.length)) return [3 /*break*/, 4];
                codePoint = s.codePointAt(i);
                if (codePoint > 0xffff) {
                    i++; // skip 2nd surrogate pair
                }
                return [4 /*yield*/, codePoint];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
function typeDescriptor(name) {
    var enum_map = typeMaps[name];
    return {
        size: 1,
        baseType: 0,
        mapValue: function (value) { return enum_map[value]; },
        setValue: DataView.prototype.setUint8
    };
}

var FitMessage = /** @class */ (function () {
    function FitMessage(name, localNum, values) {
        this.name = name;
        this.localNum = localNum;
        var _a = MsgDefs[name], num = _a.num, fields = _a.fields;
        this.msgNum = num;
        this.fields = this.createFields(fields, values);
        this.fieldsSize = this.getFieldSize();
    }
    FitMessage.prototype.isSameMsg = function (msg) {
        var _this = this;
        var _a, _b;
        return this.msgNum === msg.msgNum &&
            this.localNum === msg.localNum &&
            ((_a = this.fieldsSize) === null || _a === void 0 ? void 0 : _a.length) === ((_b = msg.fieldsSize) === null || _b === void 0 ? void 0 : _b.length) &&
            this.fieldsSize.every(function (item, i) { return _this.isSameSize(item, msg.fieldsSize[i]); });
    };
    FitMessage.prototype.isSameSize = function (a, b) {
        return a.number === b.number && a.size === b.size && a.baseType === b.baseType;
    };
    FitMessage.prototype.createFields = function (fieldDefs, fieldValues) {
        return fieldDefs
            .map(function (fieldDef) { return (__assign(__assign({}, fieldDef), { value: fieldValues[fieldDef.name] })); })
            .filter(function (_a) {
            var value = _a.value;
            return value !== undefined;
        });
    };
    FitMessage.prototype.getFieldSize = function () {
        return this.fields.map(function (_a) {
            var type = _a.type, number = _a.number, value = _a.value;
            var _b = getTypeDescriptor(type), size = _b.size, baseType = _b.baseType;
            return { number: number, baseType: baseType, size: type === 'string' ? encodedStrSize(value) : size };
        });
    };
    FitMessage.prototype.getSizeBuff = function () {
        var size = this.fieldsSize;
        var length = 6 + 3 * size.length;
        var dv = new DataView(new ArrayBuffer(length));
        dv.setUint8(0, 0x40 | this.localNum);
        dv.setUint8(2, 1);
        dv.setUint16(3, this.msgNum);
        dv.setUint8(5, size.length);
        var offset = 6;
        for (var _i = 0, size_1 = size; _i < size_1.length; _i++) {
            var item = size_1[_i];
            dv.setUint8(offset++, item.number);
            dv.setUint8(offset++, item.size);
            dv.setUint8(offset++, item.baseType);
        }
        return dv.buffer;
    };
    FitMessage.prototype.getDataBuff = function () {
        var length = this.fieldsSize.reduce(function (l, _a) {
            var size = _a.size;
            return l + size;
        }, 1);
        var dv = new DataView(new ArrayBuffer(length));
        dv.setUint8(0, this.localNum);
        var dvOffset = 1;
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var _b = _a[_i], value = _b.value, type = _b.type, units = _b.units, scale = _b.scale, offset = _b.offset;
            var _c = getTypeDescriptor(type), size = _c.size, mapValue = _c.mapValue, setValue = _c.setValue;
            var val = mapValue ? mapValue(value) : value;
            if (units === 'semicircles') {
                val = Math.round((value / 180) * 0x80000000);
            }
            if (isNum(offset)) {
                val -= offset;
            }
            if (isNum(scale)) {
                val *= scale;
            }
            setValue.call(dv, dvOffset, val);
            dvOffset += size;
        }
        return dv.buffer;
    };
    return FitMessage;
}());
function isNum(n) {
    return typeof n === 'number' && isFinite(n);
}

var CRC_TABLE = [
    0x0000,
    0xcc01,
    0xd801,
    0x1400,
    0xf001,
    0x3c00,
    0x2800,
    0xe401,
    0xa001,
    0x6c00,
    0x7800,
    0xb401,
    0x5000,
    0x9c01,
    0x8801,
    0x4400
];
var update_nibble = function (crc, nibble) { return ((crc >> 4) & 0x0fff) ^ CRC_TABLE[crc & 0xf] ^ CRC_TABLE[nibble]; };
var update_nibbles = function (crc, lo, hi) { return update_nibble(update_nibble(crc, lo), hi); };
var update = function (crc, byte) { return update_nibbles(crc, byte & 0xf, (byte >> 4) & 0xf); };
function crc(buffer, initial) {
    if (initial === void 0) { initial = 0; }
    return new Uint8Array(buffer).reduce(function (crc, byte) { return update(crc, byte); }, initial);
}

var HEADER_LEN = 14;
var PROTOCOL_VERSION = 0x10; // 1.0
var PROFILE_VERSION = 2078; // 20.78
var MAGIC = 0x2e464954; // ".FIT"
var FitEncoder = /** @class */ (function () {
    function FitEncoder() {
        this.localNumMap = {};
        this.fitMessages = [];
        this.msgBuffers = [];
    }
    Object.defineProperty(FitEncoder.prototype, "header", {
        get: function () {
            var dv = new DataView(new ArrayBuffer(HEADER_LEN));
            dv.setUint8(0, HEADER_LEN);
            dv.setUint8(1, PROTOCOL_VERSION);
            dv.setUint16(2, PROFILE_VERSION, true);
            dv.setUint32(4, this.dataLength, true);
            dv.setUint32(8, MAGIC);
            dv.setUint16(12, crc(dv.buffer.slice(0, 12)), true);
            return dv.buffer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FitEncoder.prototype, "dataLength", {
        get: function () {
            return this.msgBuffers.reduce(function (l, msg) { return l + msg.byteLength; }, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FitEncoder.prototype, "dataCrc", {
        get: function () {
            return this.msgBuffers.reduce(function (l, msg) { return crc(msg, l); }, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FitEncoder.prototype, "trailer", {
        get: function () {
            var dv = new DataView(new ArrayBuffer(2));
            dv.setUint16(0, this.dataCrc, true);
            return dv.buffer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FitEncoder.prototype, "byteLength", {
        get: function () {
            return this.header.byteLength + this.dataLength + this.trailer.byteLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FitEncoder.prototype, "dataArrayBuffer", {
        get: function () {
            return __spreadArray(__spreadArray([
                this.header
            ], this.msgBuffers), [
                this.trailer
            ]);
        },
        enumerable: false,
        configurable: true
    });
    FitEncoder.prototype.createBlob = function () {
        return new Blob(this.dataArrayBuffer, { type: 'application/octet-stream' });
    };
    FitEncoder.prototype.writeMessage = function (name, values) {
        var localNum = this.localNumMap[name];
        if (localNum === undefined) {
            localNum = this.localNumMap[name] = Object.keys(this.localNumMap).length;
        }
        var msg = new FitMessage(name, localNum, values);
        // debugger
        var localMsg = this.fitMessages[localNum];
        if (!localMsg || !msg.isSameMsg(localMsg)) {
            this.msgBuffers.push(msg.getSizeBuff());
            this.fitMessages[localNum] = msg;
        }
        this.msgBuffers.push(msg.getDataBuff());
    };
    FitEncoder.prototype.writeFileId = function (values) {
        this.writeMessage('file_id', values);
    };
    FitEncoder.prototype.writeEvent = function (values) {
        this.writeMessage('event', values);
    };
    FitEncoder.prototype.writeRecord = function (values) {
        this.writeMessage('record', values);
    };
    return FitEncoder;
}());

function parseGpx(gpxString) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = parseRoute;
                    return [4 /*yield*/, parseXml(gpxString)];
                case 1: return [4 /*yield*/, _a.apply(void 0, [_b.sent()])];
                case 2: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
function parseXml(xmlString) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    // const doc = parse(xmlString);
                    var doc;
                    if (typeof DOMParser === 'function') {
                        var parser = new DOMParser(); /* global DOMParser */
                        doc = parser.parseFromString(xmlString, 'application/xml');
                    }
                    else {
                        var parse = require('node-html-parser').parse;
                        doc = parse(xmlString);
                    }
                    var gpx = doc.querySelector('gpx');
                    console.log(gpx);
                    if (gpx) {
                        resolve(gpx);
                    }
                    else {
                        console.error('Parse Error');
                        reject('Parse Error');
                    }
                })];
        });
    });
}
function findChild(node, nodeName) {
    return Array.from((node === null || node === void 0 ? void 0 : node.childNodes) || []).find(function (i) { var _a; return ((_a = i.tagName) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === nodeName.toUpperCase(); });
}
function haversine(_a, _b) {
    var lat1 = _a.lat, lon1 = _a.lon;
    var lat2 = _b.lat, lon2 = _b.lon;
    var R = 6371e3;
    var φ1 = (lat1 * Math.PI) / 180;
    var φ2 = (lat2 * Math.PI) / 180;
    var Δφ = ((lat2 - lat1) * Math.PI) / 180;
    var Δλ = ((lon2 - lon1) * Math.PI) / 180;
    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
}
function trackPoints(trkseg) {
    var lastPoint, distance, _i, _a, node, lat, lon, ele, time, extensions, point, d, track, heart_rate, cadence, speed, temperature;
    var _b, _c, _d, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                distance = 0;
                _i = 0, _a = trkseg.childNodes;
                _g.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 4];
                node = _a[_i];
                if (!(((_b = node.tagName) === null || _b === void 0 ? void 0 : _b.toUpperCase()) === 'trkpt'.toUpperCase())) return [3 /*break*/, 3];
                lat = parseFloat(node.getAttribute('lat'));
                lon = parseFloat(node.getAttribute('lon'));
                ele = findChild(node, 'ele');
                time = findChild(node, 'time');
                extensions = findChild(node, 'extensions');
                if (lastPoint) {
                    distance += haversine(lastPoint, { lat: lat, lon: lon });
                }
                point = {
                    lat: lat,
                    lon: lon,
                    ele: ele && parseFloat(ele.textContent),
                    distance: distance,
                    time: time && Date.parse(time.textContent)
                };
                if (extensions) {
                    d = findChild(extensions, 'distance');
                    if (d)
                        point.distance = parseFloat(d.textContent);
                    track = findChild(extensions, 'gpxtpx:TrackPointExtension');
                    if (track) {
                        heart_rate = (_c = findChild(track, 'gpxtpx:hr')) === null || _c === void 0 ? void 0 : _c.textContent;
                        cadence = (_d = findChild(track, 'gpxtpx:cad')) === null || _d === void 0 ? void 0 : _d.textContent;
                        speed = (_e = findChild(track, 'gpxtpx:speed')) === null || _e === void 0 ? void 0 : _e.textContent;
                        temperature = (_f = findChild(track, 'gpxtpx:atemp')) === null || _f === void 0 ? void 0 : _f.textContent;
                        if (heart_rate)
                            point.heart_rate = parseFloat(heart_rate);
                        if (cadence)
                            point.cadence = parseFloat(cadence);
                        if (speed)
                            point.speed = parseFloat(speed);
                        if (temperature)
                            point.temperature = parseFloat(temperature);
                    }
                }
                lastPoint = point;
                return [4 /*yield*/, point];
            case 2:
                _g.sent();
                _g.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
function routePoints(rte) {
    var lastPoint, distance, _i, _a, node, lat, lon, time, point;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                distance = 0;
                _i = 0, _a = rte.childNodes;
                _c.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 4];
                node = _a[_i];
                if (!(((_b = node.tagName) === null || _b === void 0 ? void 0 : _b.toUpperCase()) === 'rtept'.toUpperCase())) return [3 /*break*/, 3];
                lat = parseFloat(node.getAttribute('lat'));
                lon = parseFloat(node.getAttribute('lon'));
                time = undefined;
                if (lastPoint) {
                    distance += haversine(lastPoint, { lat: lat, lon: lon });
                }
                point = {
                    lat: lat,
                    lon: lon,
                    time: time,
                    distance: distance
                };
                lastPoint = point;
                return [4 /*yield*/, point];
            case 2:
                _c.sent();
                _c.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
function elevationChange(points) {
    var eleGain = 0;
    var eleLoss = 0;
    var lastEle;
    for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
        var ele = points_1[_i].ele;
        if (ele === undefined) {
            return {};
        }
        if (lastEle === undefined) {
            lastEle = ele;
            continue;
        }
        var delta = ele - lastEle;
        if (Math.abs(delta) >= 4) {
            lastEle = ele;
            if (delta > 0) {
                eleGain += delta;
            }
            else {
                eleLoss -= delta;
            }
        }
    }
    return { eleGain: eleGain, eleLoss: eleLoss };
}
function parseRoute(doc) {
    return __awaiter(this, void 0, void 0, function () {
        var metadata, metadataName, trk, trkseg, trkName, rte, rteName, name, points, _a, eleGain, eleLoss;
        return __generator(this, function (_b) {
            metadata = findChild(doc, 'metadata');
            metadataName = metadata && findChild(metadata, 'name');
            trk = findChild(doc, 'trk');
            trkseg = trk && findChild(trk, 'trkseg');
            trkName = trk && findChild(trk, 'name');
            rte = findChild(doc, 'rte');
            rteName = rte && findChild(rte, 'name');
            name = (metadataName && metadataName.textContent) ||
                (trkName && trkName.textContent) ||
                (rteName && rteName.textContent) ||
                'Unnamed';
            points = (trkseg && Array.from(trackPoints(trkseg))) || (rte && Array.from(routePoints(rte)));
            _a = (points && elevationChange(points)) || {}, eleGain = _a.eleGain, eleLoss = _a.eleLoss;
            return [2 /*return*/, points && { name: name, points: points, eleGain: eleGain, eleLoss: eleLoss }];
        });
    });
}

function gpx2fitEncoder(str) {
    return __awaiter(this, void 0, void 0, function () {
        var gpx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, parseGpx(str)];
                case 1:
                    gpx = _a.sent();
                    return [2 /*return*/, encodeFit(gpx)];
            }
        });
    });
}
function encodeFit(gpx) {
    var start = gpx.points[0];
    var finish = gpx.points[gpx.points.length - 1];
    var encoder = new FitEncoder();
    encoder.writeFileId({ type: 'activity', time_created: start.time });
    encoder.writeEvent({
        timestamp: start.time,
        event: 'timer',
        event_type: 'start',
        event_group: 0
    });
    var prev = { distance: 0, time: start.time };
    var maxS = 0;
    var movingT = 0;
    var minA = Infinity;
    var maxA = -Infinity;
    var t = [];
    for (var _i = 0, _a = gpx.points; _i < _a.length; _i++) {
        var _b = _a[_i], lat = _b.lat, lon = _b.lon, ele = _b.ele, time = _b.time, distance = _b.distance, speed = _b.speed, heart_rate = _b.heart_rate, cadence = _b.cadence, temperature = _b.temperature;
        speed = speed || 0;
        var dur = Math.round((time - prev.time) / 1000);
        if (!speed && dur > 0) {
            speed = (distance - prev.distance) / dur;
        }
        if (speed > .5) {
            movingT += dur;
        }
        maxS = speed > maxS ? speed : maxS;
        minA = ele < minA ? ele : minA;
        maxA = ele > maxA ? ele : maxA;
        prev = { lat: lat, lon: lon, ele: ele, time: time, distance: distance, speed: speed };
        var item = {
            timestamp: time,
            position_lat: lat,
            position_long: lon,
            altitude: ele,
            distance: distance,
            heart_rate: heart_rate,
            cadence: cadence,
            speed: speed,
            temperature: temperature
        };
        t.push(item);
        encoder.writeRecord(item);
    }
    console.log(t, encoder);
    var totalTime = Math.round((finish.time - start.time) / 1000);
    var overview = {
        event: 'lap',
        event_type: 'stop',
        sport: 'cycling',
        start_time: start.time,
        start_position_lat: start.lat,
        start_position_long: start.lon,
        avg_speed: finish.distance / movingT,
        total_moving_time: movingT,
        total_elapsed_time: totalTime,
        total_timer_time: totalTime,
        max_speed: maxS,
        max_altitude: maxA,
        min_altitude: minA,
        total_distance: finish.distance,
        total_ascent: gpx.eleGain,
        total_descent: gpx.eleLoss
    };
    console.log(overview);
    encoder.writeEvent({
        timestamp: finish.time,
        event: 'timer',
        event_type: 'stop_disable_all',
        event_group: 0
    });
    encoder.writeMessage('lap', overview);
    encoder.writeMessage('session', __assign(__assign({}, overview), { num_laps: 1, first_lap_index: 0 }));
    encoder.writeMessage('activity', {
        'timestamp': finish.time,
        'total_timer_time': overview.total_timer_time,
        'local_timestamp': finish.time,
        'num_sessions': 1,
        'type': 'manual',
        'event': 'activity',
        'event_type': 'stop'
    });
    return encoder;
}

function gpx2fit(gpx) {
    return __awaiter(this, void 0, void 0, function () {
        var encoder, blob, a;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, gpx2fitEncoder(gpx)];
                case 1:
                    encoder = _a.sent();
                    blob = encoder.createBlob();
                    a = document.createElement('a');
                    a.download = 'demo.fit';
                    a.href = URL.createObjectURL(blob);
                    a.click();
                    return [2 /*return*/];
            }
        });
    });
}
function fileChange(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var gpx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(ev);
                    return [4 /*yield*/, readFile(ev.target.files[0])];
                case 1:
                    gpx = _a.sent();
                    return [4 /*yield*/, gpx2fit(gpx)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function readFile(file) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var reader = new FileReader();
                    reader.onload = function (_a) {
                        var result = _a.target.result;
                        return resolve(result);
                    };
                    reader.onerror = function (error) { return reject(error); };
                    reader.readAsText(file, 'UTF-8');
                })];
        });
    });
}
setTimeout(function () {
    var input = document.querySelector('input');
    input.onchange = fileChange;
});
