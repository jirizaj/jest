/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

const toString = Object.prototype.toString;

export default function validationCondition(
  option: any,
  validOption: any,
): boolean {
  return (
    option === null ||
    option === undefined ||
    toString.call(option) === toString.call(validOption)
  );
}