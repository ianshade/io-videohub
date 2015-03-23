'use strict';

var fs = require('fs');
var assert = require('assert');
var parser = require('../lib/parser');
var router = require('../lib/router');

var fixture = fs.readFileSync(__dirname+'/fixture.txt').toString().split(/\n\n/g);

describe('parser()', function(){
  it('parses the dump', function(){
    fixture.forEach(function(block){
      if (!block) return;
      router.updateStatus(parser(block+'\n\n'));
    });

    assert(router.statusObj);
  });
});
