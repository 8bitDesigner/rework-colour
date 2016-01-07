function is (matcher) {
  return function (el) {
    return el.type === matcher
  }
}

module.exports = function (ast, rework) {
  ast.rules.filter(is('rule')).forEach(function (rule) {
    rule.declarations.filter(is('declaration')).forEach(function (decl) {
      if (decl.property === 'colour') {
        decl.property = 'color'
      }
    })
  })
}
